import { IGoogleDriveFile } from "@interfaces/IGoogleDriveFile";
import { IProject } from "@interfaces/IProject";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_FOLDER_ID;

export const fetchProjectData = async (): Promise<{ projects: IProject[]} | null> => {
  try {
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data: {files: IGoogleDriveFile[]} = await response.json();

    if (!data.files) {
        throw new Error("Не удалось получить файлы.");
    }

    const file = data.files.find((file: {name: string}) => file.name === "projects.json");

    if (!file) {
        throw new Error("Файл .json не найден.");
    }

    const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`;
    const fileResponse = await fetch(fileUrl);
    const jsonData: { projects: IProject[]} = await fileResponse.json();

    return jsonData;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return null;
  }
}
