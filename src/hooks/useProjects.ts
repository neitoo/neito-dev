import { useEffect, useState } from "react";
import { IProject } from '@interfaces/IProject';
import { fetchProjectData } from "@api/googleDrive";

export const useProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchProjectData(signal);
        if (data && Array.isArray(data.projects)){
          setProjects(data.projects as IProject[]);
        } else {
          throw new Error("Не удалось загрузить проекты.");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Произошла неизвестная ошибка.")
      } finally {
        setIsLoading(false);
      }
    };

    getProjects();

    return () => {
      controller.abort();
    };
  }, []);
  
  return {projects, isLoading, error};
}