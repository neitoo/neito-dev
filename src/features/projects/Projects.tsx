import { ProjectsList } from "@components/projectsList";

const Projects = () => {

    return (
        <main className="main__container">
            <section className="content__container">
                <h1 className="text-2xl 2xl:text-5xl uppercase">neito | проекты</h1>
            </section>
            
            <ProjectsList/>
        </main>

    );
}

export default Projects;