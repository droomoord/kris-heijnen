/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

//data
import projects from "../../data/projects.json";

//functions
import { parseToHTML } from "../../functions";

//components
import { GoPrimitiveDot } from "react-icons/go";
import { BiRightArrowCircle } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import WriteAnimation from "../writeAnimation/WriteAnimation";

const Carousel3D = () => {
  const [currentDeg, setCurrentDeg] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [projectsState, setProjectsState] = useState(projects);
  const [projectsState, setProjectsState] = useState([
    {
      title: "Joao Vedana",
      description:
        "A website I created for João Vedana, a musician. It is built with *NextJS* and a CMS called Sanity. The system is set up in a way that whenever the content changes Vercel creates new static files to be served, which provides for a fast load time and makes it SEO-friendly.",
      url: "https://www.joaovedana.com/",
      image: "/joao.png",
      video: "joao.mp4",
    },
  ]);
  const [turnDeg, setTurnDeg] = useState(360 / projects.length);
  const [projectToBeDeleted, setProjectToBeDeleted] = useState(null);

  function clicked(targetIndex) {
    setCurrentIndex((prevIndex) => {
      setCurrentDeg((prevDeg) => {
        return prevDeg + (prevIndex - targetIndex) * turnDeg;
      });
      return targetIndex;
    });
  }

  function remove(targetIndex) {
    setProjectToBeDeleted(targetIndex);
    setTimeout(() => {
      setProjectToBeDeleted(null);
      setProjectsState(() => {
        const projects = [...projectsState];
        projects.splice(targetIndex, 1);
        return projects;
      });
      setCurrentDeg(0);
      setCurrentIndex(0);
    }, 1000);
  }

  useEffect(() => {
    setTurnDeg(360 / projectsState.length);
  }, [projectsState]);

  return (
    <div className="carousel3D">
      <div className="carousel3D__container">
        <div
          className="carousel3D__wrapper"
          style={{
            transform: `rotateY(${currentDeg}deg)`,
          }}
        >
          {projectsState.map((project, index) => {
            project.description = parseToHTML(project.description);
            return (
              <div
                className={`project ${
                  index == currentIndex && "project--active"
                } ${index == projectToBeDeleted ? "disappear" : ""}`}
                style={{
                  transform: `rotateY(${turnDeg * index}deg) translateZ(400px)`,
                }}
                onClick={index != currentIndex ? () => clicked(index) : null}
                key={project.title}
              >
                <h4 className="project__title">{project.title}</h4>
                <div className="project__image">
                  <img
                    className="project__image"
                    src={`/static/images/${project.image}`}
                    alt={project.title}
                  />
                  {index == currentIndex && (
                    <video
                      autoPlay={true}
                      loop
                      src={`/static/videos/${project.video}`}
                    ></video>
                  )}
                </div>

                <p
                  className="project__description"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <a
                  className="project__link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.url}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="controls">
        <BiRightArrowCircle
          color="white"
          style={{ transform: "rotate(180deg)" }}
          size="3em"
          className="arrow"
          onClick={
            projectsState[currentIndex - 1]
              ? () => clicked(currentIndex - 1)
              : () => clicked(projectsState.length - 1)
          }
        />
        <div>
          {projectsState.map((project, index) => {
            return (
              <GoPrimitiveDot
                key={project.title}
                className={index == currentIndex ? "dot dot--active" : "dot"}
              />
            );
          })}
        </div>
        <BiRightArrowCircle
          size="3em"
          className="arrow"
          onClick={
            projectsState[currentIndex + 1]
              ? () => clicked(currentIndex + 1)
              : () => clicked(0)
          }
        />
        <VscTrash
          className="delete"
          size="2em"
          onClick={() => remove(currentIndex)}
        />
      </div>
      {projectsState.length == 0 && (
        <div className="reset">
          <WriteAnimation sentence="Great, now I have no projects left. Please reset!" />
          <button onClick={() => setProjectsState(projects)}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Carousel3D;
