import { useProjects } from "@hooks/useProjects";
import { Link } from "react-router-dom";


const ProjectsList: React.FC = () => {
    const {projects, isLoading, error} = useProjects();

    if (isLoading) {
        return <div>Загрузка проектов...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {projects.length === 0 ? (
                <p>Проекты не найдены</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>
                                <h2>{project.name}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectsList;