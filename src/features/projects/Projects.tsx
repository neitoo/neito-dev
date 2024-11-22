import { DecryptText } from "@components/dectyptText";
import { ProjectsList } from "@components/projectsList";

const Projects = () => {

    return (
        <main className="main__container">
            <section className="content__container">
                <h1 className="text-2xl 2xl:text-5xl uppercase"><DecryptText text="neito | проекты" duration={1000}/></h1>
            </section>
            
            <ProjectsList/>
        </main>

    );
}

export default Projects;