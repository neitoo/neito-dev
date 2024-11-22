import { CopyText } from '@components/copyText';
import flash from '@images/interface-essential-flash.svg';
import scan from '@images/interface-essential-iris-scan.svg';

import coding from '@images/coding-apps-websites-programming-hold-code.svg';
import tools from '@images/interface-essential-hammer-1.svg';
import module from '@images/coding-apps-websites-module.svg';
import addition from '@images/coding-apps-websites-plugin.svg';

import telegram from '@images/telegram.svg';
import mail from '@images/mail.svg';

import { useRef } from 'react';
import { DecryptText } from '@components/dectyptText';


const Home = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="main__container">
            <section className="content__container">
                <h1 className="text-2xl 2xl:text-5xl uppercase"><DecryptText text="neito | dev" duration={1000}/></h1>
            </section>

            <section className="content__container">
                <div className="flex gap-2 flex-nowrap">
                    <p className="text-3xl">Привет!</p>
                    <img src={flash} className="select-none size-9"/>
                </div>
            </section>

            <section className="content__container">
                <div className="flex flex-col items-center gap-16 flex-nowrap">
                    <img src={scan} className="select-none size-14 animate-appearance"/>
                    <p className="text-xl text-center">
                        Моё имя <span className="bg-red-700 px-2">Никита</span>. Занимаюсь разработкой сайтов и мобильных приложений. <br/>Тут я делюсь своими проектами, которые могут вас заинтересовать.
                    </p>
                </div>
            </section>

            <section className="content__container">
                <div onClick={handleScroll} className="flex items-center justify-around w-fit cursor-pointer">
                    <div className="w-12 h-20 border-2 border-dashed border-white relative mouse-before"></div>
                </div>
            </section>

            <section ref={sectionRef} className="content__container mt-64">
                <p className="text-3xl mb-12">Технологии в которых я разбираюсь</p>
                <ul className="flex flex-col gap-12 w-full">
                    <li className="list__skills">
                        <div className='skill__image-block'>
                            <img className='size-12' src={coding} alt="" />
                        </div>
                        
                        <ul className="skills__names">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                            <li>Kotlin</li>
                        </ul>
                    </li>
                    <li className="list__skills">
                        <div className='skill__image-block'>
                            <img className='size-12' src={tools} alt="" />
                        </div>
                        
                        <ul className="skills__names">
                            <li>Git/GitHub</li>
                            <li>REST API</li>
                            <li>Vite</li>
                            <li>Electron.js</li>
                            <li>Node.js</li>
                        </ul>
                    </li>
                    <li className="list__skills">
                        <div className='skill__image-block'>
                            <img className='size-12' src={module} alt="" />
                        </div>
                        
                        <ul className="skills__names">
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>October CMS</li>
                            <li>Jetpack Compose</li>
                        </ul>
                    </li>
                    <li className="list__skills">
                        <div className='skill__image-block'>
                            <img className='size-12' src={addition} alt="" />
                        </div>
                        
                        <ul className="skills__names">
                            <li>Photoshop, Figma</li>
                            <li>Linux</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="content__container">
                <p className="text-3xl mb-12">Контакты</p>

                <p className="text-xl text-center">
                Не стесняйтесь писать мне, если у вас есть вопросы или предложения. Я всегда открыт для общения и новых идей. 
                </p>

                <p className='text-xl text-center mt-10'>
                    Связаться со мной можно так:
                </p>

                <div className='flex flex-row mt-5 w-full justify-center'>
                    <div className='flex flex-col gap-5 items-left'>
                        <div className='flex flex-row gap-3 items-center'>
                            <a href="https://t.me/neitoo" title='Открыть телеграм аккаунт'>
                                <img src={telegram} alt="Telegram" />
                            </a>
                            <CopyText text="@neitoo" />
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={mail} alt="Email" />
                            <CopyText text="neito.dev@gmail.com"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;