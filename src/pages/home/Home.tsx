import { CopyText } from "@components/copyText";
import helloLogo from "@images/5006-mibored.png";

import telegram from "@images/telegram.svg";
import mail from "@images/mail.svg";
import good from "@images/good-menhera.gif";

import { useRef } from "react";
import { Stars } from "@components/stars";
import { useIntersection } from "@hooks/useIntersection";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const skillsRef1 = useRef<HTMLUListElement>(null);
  const skillsRef2 = useRef<HTMLUListElement>(null);
  const skillsRef3 = useRef<HTMLUListElement>(null);

  const isVisible1 = useIntersection(skillsRef1, '100px');
  const isVisible2 = useIntersection(skillsRef2, '100px');
  const isVisible3 = useIntersection(skillsRef3, '100px');

  return (
    <main className="main__container">
      <section className="content__container h-screen pt-32 animate-fade">
        <div className="flex flex-col w-full h-full">
          <div className="flex gap-2 flex-nowrap">
            <img
              src={helloLogo}
              className="select-none size-9 animate-appearance"
            />
            <p className="text-2xl md:text-3xl">Привет!</p>
          </div>

          <div className="flex flex-col items-start gap-12 flex-nowrap py-14">
            <div>
              <p className="text-xl leading-[2]">Меня зовут </p>
              <p className="font-bold text-4xl leading-[1.5] md:leading-[1] md:text-5xl xl:leading-[1.5] xl:text-6xl">
                Никита.
              </p>
              <p className="font-bold text-4xl leading-[2] md:leading-[1.5] md:text-5xl xl:leading-[2] xl:text-6xl">
                Увлеченный разработчик.
              </p>
            </div>
            <p className="text-xl text-left">
              Занимаюсь разработкой сайтов и мобильных приложений. <br />
              Тут я делюсь своими проектами, которые могут вас заинтересовать.
            </p>
          </div>

          <a
            href="https://tyumen.hh.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-red-600 w-fit p-2 rounded-md transition-colors duration-200 hover:bg-white hover:text-black group"
          >
            Нанять меня
            <div className="absolute bottom-full left-0 hidden group-hover:block group-active:block">
              <img src={good} alt="" className="size-32" />
            </div>
          </a>

          <div
            onClick={handleScroll}
            className="flex items-center justify-around w-full cursor-pointer mt-12"
          >
            <div className="w-12 h-20 border-2 border-solid rounded-md border-white/50 relative mouse-before"></div>
          </div>
        </div>
        <Stars />
      </section>

      <div className="border-t border-white/10 w-full"></div>

      <section ref={sectionRef} className="content__container pt-32 pb-16">
        <p className="text-3xl mb-12">Технологии в которых я разбираюсь</p>
        <ul className="flex flex-col gap-12 w-full">
          <li className="list__skills">
            <div className="skill__block">
              <strong>Программирование и языки разметки</strong>
            </div>

            <ul ref={skillsRef1} className="skills__names">
              {['JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML/CSS(SASS)', 'Kotlin'].map((skill, index) => (
                <li
                  key={skill}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  className={`${isVisible1 ? 'animate-fade' : ''}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
          <li className="list__skills">
            <div className="skill__block">
              <strong>Фреймворки, библиотеки и инструменты разработки</strong>
            </div>

            <ul ref={skillsRef2} className="skills__names">
              {['React', 'Tailwind CSS', 'Node.js', 'Electron.js', 'Jetpack Compose', 'Vite', 'October CMS'].map((skill, index) => (
                <li
                  key={skill}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  className={`${isVisible2 ? 'animate-fade' : ''}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
          <li className="list__skills">
            <div className="skill__block">
              <strong>Инструменты и доп. навыки</strong>
            </div>

            <ul ref={skillsRef3} className="skills__names">
              {['Git/GitHub', 'Linux', 'Photoshop, Figma', 'Android Studio'].map((skill, index) => (
                <li
                  key={skill}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  className={`${isVisible3 ? 'animate-fade' : ''}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      
      <div className="border-t border-white/10 w-full"></div>

      <section className="content__container pt-32">
        <p className="text-3xl mb-12">Контакты</p>

        <p className="text-xl">
          Не стесняйтесь писать мне, если у вас есть вопросы или предложения. Я
          всегда открыт для общения и новых идей.
        </p>

        <p className="text-xl mt-10">Связаться со мной можно так:</p>

        <div className="flex flex-row mt-5 w-full">
          <div className="flex flex-col gap-5 items-left">
            <div className="flex flex-row gap-3 items-center">
              <a href="https://t.me/neitoo" title="Открыть телеграм аккаунт">
                <img src={telegram} alt="Telegram" />
              </a>
              <CopyText text="@neitoo" />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src={mail} alt="Email" />
              <CopyText text="neito.dev@gmail.com" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
