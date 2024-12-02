import { useProjects } from "@hooks/useProjects";
import { Link } from "react-router-dom";


const ProjectsList: React.FC = () => {
    const {projects, isLoading, error} = useProjects();

    if (isLoading) {
        return <div>Загрузка проектов...</div>
    }

    if (error) {
        return <div className="project__error">{error}</div>
    }

    return (
        <div className="w-full flex flex-col">
            {projects.length === 0 ? (
                <div className="project__notfound">
                    <p>Проекты не найдены</p>
                </div>
            ) : (
                <ul className="w-full flex flex-col gap-6">
                    {projects.map((project) => (
                        <li key={project.id} className="project__block">
                            <Link to={`/projects/${project.id}`} className="project__item">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectsList;