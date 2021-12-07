/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

//data
import courses from "../data/courses.json";

//components
import Carousel from "../components/carousel/Carousel";
import WriteAnimation from "../components/writeAnimation/WriteAnimation";
import Course from "../components/course/Course";
import ObserverComponent from "../components/observerComponent/ObserverComponent";
import Waves from "../components/waves/Waves";
import Carousel3D from "../components/carousel3D/Carousel3D";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/form/Form";

export default function Home() {
  // refs:
  const headerWrapperRef = useRef(null);
  const projectsRef = useRef(null);
  const coursesRef = useRef(null);
  const coursesWrapperRef = useRef(null);
  const aboutRef = useRef(null);

  // scroll position of the body element:
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    // fade-in of the header elements:
    headerWrapperRef.current.querySelectorAll(":scope > *").forEach((el, i) => {
      el.classList.add("fade-in");
      el.style.animationDelay = `${i / 3 + 0.5}s`;
    });
    window.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
      // keep track of scroll position:
      setScrollPos(
        document.body.scrollTop || document.documentElement.scrollTop
      );
    }
  }, []);
  function scrollToSection(section) {
    switch (section) {
      case "projects":
        projectsRef.current.scrollIntoView();
        break;
      case "courses":
        coursesRef.current.scrollIntoView();
        break;
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Head>
        <title>Kris Heijnen - Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        {/* HEADER */}
        <header className="header">
          <div className="desktop">
            {
              <Navbar
                visibility={scrollPos > 500}
                scrollToSection={scrollToSection}
              />
            }
          </div>
          <div className="header__wrapper" ref={headerWrapperRef}>
            <div className="my-name-is">Hi, my name is</div>
            <h1>Kris Heijnen</h1>
            <div className="avatar">
              <img src="/avatar.png" alt="kris heijnen" />
            </div>
            <h4 className="mono">
              <WriteAnimation sentence="Front-end web developer" delay={2000} />
            </h4>
          </div>
          <div className="waves">
            <Waves />
          </div>
        </header>
        {/* PROJECTS */}
        <section className="projects" ref={projectsRef}>
          <h2 className="projects__title">Projects</h2>
          <div className="mobile">
            <Carousel />
          </div>
          <div className="desktop">
            <Carousel3D />
          </div>
        </section>
        {/* COURSES */}
        <section className="courses" ref={coursesRef}>
          <h2 className="courses__title">Education</h2>
          <div className="courses__wrapper" ref={coursesWrapperRef}>
            {courses.map((course, index) => {
              const observerOptions = {
                threshold: "1.0",
              };
              return (
                <>
                  <ObserverComponent
                    addClass={["fade-in-course"]}
                    options={observerOptions}
                    key={course.title}
                  >
                    <Course
                      title={course.title}
                      date={course.date}
                      lastOfArray={index == courses.length - 1}
                    >
                      {course.description}
                    </Course>
                  </ObserverComponent>
                </>
              );
            })}
          </div>
        </section>
        <section className="about" ref={aboutRef}>
          <h2 className="about__title">About me</h2>

          <div className="about__wrapper">
            <p>
              I have worked most part of my life as a musician, and I am looking
              for an oportunity to change careers. I have done a little bit of
              freelancing, but right now mainly focussing on looking for a
              junior front-end position.
            </p>
            <Form></Form>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
