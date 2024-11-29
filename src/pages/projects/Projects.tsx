import { ProjectsList } from "@components/projectsList";

const Projects = () => {

    return (
        <main className="main__container">
            <section className="content__container pt-32">
                <h1 className="text-2xl 2xl:text-5xl uppercase">проекты</h1>
            </section>
            
            <ProjectsList/>
        </main>

    );
}

export default Projects;