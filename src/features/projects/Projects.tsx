import { TextHeader } from "@components/textHeader";

const Projects = () => {
    const text = 'neito | проекты';

    return (
        <main className="main__container">
            <section className="content__container">
                <TextHeader text={text} />
            </section>
        </main>
    );
}

export default Projects;