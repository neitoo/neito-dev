import { useProjects } from "@hooks/useProjects";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams<{id: string}>();
    const { projects, isLoading } = useProjects();

    if (isLoading) {
        return <div>Загрузка проектов...</div>
    }

    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <div>Проект не найден</div>
    }

    return (
        <main className="main__container">
            <div>
                <h1>{project.name}</h1>
            </div>
        </main>
    );
}

export default ProjectDetails;