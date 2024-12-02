import { ProjectsList } from "@components/projectsList";

const Projects = () => {

    return (
        <main className="main__container">
            <section className="content__container pt-32">
                <h1 className="text-2xl 2xl:text-5xl uppercase w-full text-center animate-fadeDown">Проекты</h1>

                <p className="pt-16 animate-fade">
                    Это проекты, которые я сделал, некоторые из них личные проекты или работа, или для других ситуаций.
                    Если вы хотите увидеть абсолютно все мои проекты, перейдите на мой <a href="https://github.com/neitoo" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/neitoo</a>.
                </p>
            </section>
            
            <section className="content__container pt-16">
                <ProjectsList/>
            </section>
        </main>

    );
}

export default Projects;