import { IGoogleDriveFile } from "@interfaces/IGoogleDriveFile";
import { IProject } from "@interfaces/IProject";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_FOLDER_ID;
const DEPLOYMENT_ID = import.meta.env.VITE_DEPLOYMENT_ID;

const CACHE_KEY = "cachedProjects";
const CACHE_EXPIRATION_KEY="cacheExpiration";
const CACHE_TTL= 24 * 60 * 60 * 1000;

const isCacheValid = (): boolean => {
  const expiration = localStorage.getItem(CACHE_EXPIRATION_KEY);
  if(!expiration) return false;

  const expirationTime = parseInt(expiration, 10);
  return Date.now() < expirationTime;
};

const saveToCache = (data: IProject[]) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_EXPIRATION_KEY, (Date.now() + CACHE_TTL).toString())
};

const getFromCache = (): IProject[] | null => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if(!cachedData) return null;
  
  try {
    return JSON.parse(cachedData) as IProject[];
  } catch (error) {
    console.error("Ошибка при чтении кеша:", error);
    return null; // Возвращаем null, если данные повреждены
  }
}

export const fetchProjectData = async (signal: AbortSignal): Promise<{ projects: IProject[] } | null> => {
  try {
    if(isCacheValid()) {
      const cachedProjects = getFromCache();
      if(cachedProjects) {
        console.log("Данные загружены из кеша");
        return { projects: cachedProjects };
      }
    }


    const gasScriptUrl = `https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec`;
    const apiUrl = `${gasScriptUrl}?folderId=${FOLDER_ID}&apiKey=${API_KEY}`;

    const response = await fetch(apiUrl, { signal });
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных с GAS.");
    }

    const { data }: { data: IGoogleDriveFile[] } = await response.json();

    const file = data.find((file) => file.name === "projects.json");
    if (!file) {
      throw new Error("Файл projects.json не найден.");
    }

    const fileResponse = await fetch(file.url);
    if (!fileResponse.ok) {
      throw new Error("Не удалось загрузить файл projects.json.");
    }

    const jsonData: { projects: IProject[] } = await fileResponse.json();

    saveToCache(jsonData.projects);

    return jsonData;
  } catch (error) {
    if (signal.aborted) {
      console.log("Запрос был отменен.");
      return null;
    }

    const cachedProjects = getFromCache();

    if(cachedProjects) {
      return { projects: cachedProjects };
    }

    console.error("Ошибка при загрузке данных:", error);
    return null;
  }
};
