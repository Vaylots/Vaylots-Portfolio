import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header/";
import avatar from "../public/realAvatar.jpg";
import NextJsLogo from "../public/nextjs.png";
import ReactLogo from "../public/React.png";
import JsLogo from "../public/javaScript.jpg";
import TsLogo from "../public/typescript.png";
import PyLogo from "../public/python-logo.jpeg";
import TwLogo from "../public/logo-Tailwind.jpg";
import djangoLogo from "../public/Python-Django.jpg";

export default function Home(): JSX.Element {
  const [language, setLanguage] = useState<boolean>();

  const changeLanguage = (): void => {
    setLanguage(!language);
  };

  return (
    <>
      <Head>
        <title>Vaylots</title>
      </Head>

      <main>
        <div className="w-full flex h-screen flex-col  ">
          <Header changeLanguage={changeLanguage} />

          <div className="w-full h-full mt-36 flex flex-col justify-center items-center">
            <div className="flex sm:flex:col gap-6 mb-48 items-center ">
              <div className={language ? "pt-5 lg:pt-14" : ""}>
                {language ? (
                  <h1 className="text-xl lg:text-6xl  ">Привет, я </h1>
                ) : (
                  <h1 className="text-xl lg:text-6xl ">Hi I'm </h1>
                )}
                {language ? (
                  <h2 className="lg:text-4xl">Максим Кондратьев</h2>
                ) : (
                  <h2 className="lg:text-4xl">Maksim Kondratev</h2>
                )}
                {language ? (
                  <h3 className="lg:text-4xl">
                    Студент, <br />
                    начинающий веб разработчик
                  </h3>
                ) : (
                  <h3 className="lg:text-4xl">
                    Student, beginner web developer
                  </h3>
                )}
              </div>
              <Image
                className="w-24 lg:w-48 rounded-3xl "
                src={avatar}
                alt={"avatar"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col items-center">
            <div className="w-5/6  text-xl text-justify flex flex-col items-center">
              {language ? (
                <p className="text-2xl px-4 lg:text-5xl mb-10">
                  Добро пожаловать на мой сайт-портфолио
                </p>
              ) : (
                <p className="text-3xl px-4 font-medium lg:text-5xl mb-10">
                  Welcome to my portfolio site
                </p>
              )}
              <div className="text-justify mb-32  h-full px-4 md:w-3/6 lg:w-3/6">
                {language ? (
                  <>
                    <p className="mb-2">
                      Я родился 21.10.2003. <br /> В 2019 году начал
                      интересоваться информатикой и решил поступать в техникум
                      на программиста недалеко от родного города
                    </p>
                    <p>
                      После того, как я понял, что тема программирования стала
                      интересна мне, я начал прилагать собственные усилия для
                      изучения различных направлений программирования в
                      свободное время. Первый языком программирования, который я
                      опробовал, был Python. На Python я сдавал различные
                      проекты для учителей и сделал несколько моих личных
                      проектов, таких как телеграмм-бот, во время разработке
                      которого я понял, как парсить данные из сайтов и базовую
                      работу с базами данных, пройдя пробную версию курса
                      веб-разработчика от Яндекса, мною были освоены базовые
                      навыки HTML и CSS и по сей день я улучшаю их. В данный
                      момент я изучаю JavaScript и Typescript, а также React,
                      Next.js, Express, Tailwind CSS, фреймворки Django
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      I was born on 21.10.2003. <br /> In 2019, I began to be
                      interested in computer science and decided to enroll in a
                      technical college for programming near my hometown.
                    </p>
                    <p>
                      After I realized that the topic of programming became
                      interesting to me, I began to make my own efforts to study
                      various areas of programming in my free time. The first
                      programming language I tried out was Python. In Python I
                      turned in various projects for teachers and made a few of
                      my personal projects, such as telegram bot, during the
                      development of which I understood how to parse data from
                      websites and the basic work with databases, taking a trial
                      version of web developer course from Yandex, I mastered
                      the basic skills of HTML and CSS and to this day I improve
                      them. At this moment I am learning JavaScript and
                      Typescript, as well as React, Next.js, Express, Tailwind
                      CSS, Django frameworks
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-10 bg-base-300">
          <h1 className="w-full text-center text-3xl ">
            {language ? <>Мои навыки</> : <>My skills</>}
          </h1>
          <ul className="flex flex-wrap justify-center gap-10 mt-10">
            <li>
              <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={NextJsLogo} alt={"Next.js"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">Next.JS</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        Next.js - это фреймворк React, который предоставляет вам
                        строительные блоки для создания веб-приложений. Под
                        фреймворком мы подразумеваем Next.js обрабатывает
                        инструментарий и конфигурацию, необходимые для React, и
                        предоставляет дополнительную структуру, функции и
                        оптимизацию для вашего приложения.
                      </>
                    ) : (
                      <>
                        Next.js is a React framework that gives you building
                        blocks to create web applications. By framework, we mean
                        Next.js handles the tooling and configuration needed for
                        React, and provides additional structure, features, and
                        optimizations for your application.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={ReactLogo} alt={"React"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">React</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        React - это декларативная, эффективная и гибкая
                        библиотека JavaScript для создания пользовательских
                        интерфейсов. Она позволяет создавать сложные
                        пользовательские интерфейсы из небольших и изолированных
                        фрагментов кода, называемых "компонентами".
                      </>
                    ) : (
                      <>
                        React is a declarative, efficient, and flexible
                        JavaScript library for building user interfaces. It lets
                        you compose complex UIs from small and isolated pieces
                        of code called “components”.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={JsLogo} alt={"Javascript"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">JavaScript</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        JavaScript - это язык программирования, используемый для
                        написания фронтенд и бэкенд частей веб-сайтов и
                        мобильных приложений приложений. В текстах и учебниках
                        его часто сокращают до JS. учебниках. Это язык
                        программирования высокого уровня, что это означает, что
                        код на нем понятен и хорошо читаем. JS поддерживает все
                        популярные браузеры.
                      </>
                    ) : (
                      <>
                        JavaScript is a programming language used to write the
                        frontend and backend parts of websites and mobile
                        applications. It is often abbreviated to JS in texts and
                        tutorials. This is a high-level programming language,
                        which means the code in it is clear and well readable.
                        JS supports all popular browsers.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full   bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={TsLogo} alt={"TypeScript"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">Typescript</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        TypeScript - это свободный язык программирования с
                        открытым исходным кодом, разработанный и поддерживаемый
                        компанией Microsoft. Он является строгим синтаксическим
                        надмножеством JavaScript и добавляет в язык
                        необязательную статическую типизацию. Он предназначен
                        для разработки больших приложений и транспонируется на
                        JavaScript. Поскольку он является надмножеством
                        JavaScript, существующие программы на JavaScript также
                        являются действительными программами на TypeScript.
                      </>
                    ) : (
                      <>
                        TypeScript is a free and open source programming
                        language developed and maintained by Microsoft. It is a
                        strict syntactical superset of JavaScript and adds
                        optional static typing to the language. It is designed
                        for the development of large applications and transpiles
                        to JavaScript. As it is a superset of JavaScript,
                        existing JavaScript programs are also valid TypeScript
                        programs.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full   bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={PyLogo} alt={"Python"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">Python</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        Python - это интерпретируемый, интерактивный,
                        объектно-ориентированный язык программирования. Он
                        включает в себя модули, исключения, динамическая
                        типизация, динамические типы данных очень высокого
                        уровня и классы. Он поддерживает множество парадигм
                        программирования, помимо объектно-ориентированного
                        программирования, таких как процедурное и функциональное
                        программирование
                      </>
                    ) : (
                      <>
                        Python is an interpreted, interactive, object-oriented
                        programming language. It incorporates modules,
                        exceptions, dynamic typing, very high level dynamic data
                        types, and classes. It supports multiple programming
                        paradigms beyond object-oriented programming, such as
                        procedural and functional programming.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full   bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={TwLogo} alt={"Tailwind"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">Tailwind CSS</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        Tailwind CSS - это фреймворк CSS с открытым исходным
                        кодом. Главная особенностью этой библиотеки является то,
                        что, в отличие от других CSS-фреймворков таких как
                        Bootstrap, она не предоставляет ряд предопределенных
                        классов для таких элементов, как кнопки или таблицы.
                        Вместо этого она создается список "полезных"
                        CSS-классов, которые можно использовать для стилизации
                        каждого элемента путем смешивания и подбора .
                      </>
                    ) : (
                      <>
                        Tailwind CSS is an open source CSS framework. The main
                        feature of this library is that, unlike other CSS
                        frameworks like Bootstrap, it does not provide a series
                        of predefined classes for elements such as buttons or
                        tables. Instead, it creates a list of "utility" CSS
                        classes that can be used to style each element by mixing
                        and matching.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card w-96 h-full   bg-base-100 shadow-xl">
                <figure>
                  <Image className="h-56" src={djangoLogo} alt={"Django"} />
                </figure>
                <div className="card-body">
                  <div className="card-title">Django</div>
                  <p className="text-justify">
                    {language ? (
                      <>
                        Django - это высокоуровневый веб-фреймворк на языке
                        Python, позволяющий быстро разрабатывать безопасные и
                        поддерживаемые веб-сайты. Созданный опытными
                        разработчиками, Django берет на себя большую часть
                        хлопот, связанных с веб-разработкой, так что вы можете
                        сосредоточиться на написании своего приложения без
                        необходимости изобретать колесо. Он является бесплатным
                        и с открытым исходным кодом, имеет процветающее и
                        активное сообщество, отличную документацию и множество
                        вариантов бесплатной и платной поддержки.
                      </>
                    ) : (
                      <>
                        Django is a high-level Python web framework that enables
                        rapid development of secure and maintainable websites.
                        Built by experienced developers, Django takes care of
                        much of the hassle of web development, so you can focus
                        on writing your app without needing to reinvent the
                        wheel. It is free and open source, has a thriving and
                        active community, great documentation, and many options
                        for free and paid-for support.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
