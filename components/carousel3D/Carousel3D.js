/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

//data
import projects from "../../data/projects.json";

//functions
import { parseToHTML } from "../../functions";

const Carousel3D = () => {
  const [currentDeg, setCurrentDeg] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsState, setProjectsState] = useState(projects);
  const [turnDeg, setTurnDeg] = useState(360 / projects.length);

  function clicked(targetIndex) {
    setCurrentIndex((prevIndex) => {
      setCurrentDeg((prevDeg) => {
        return prevDeg + (prevIndex - targetIndex) * turnDeg;
      });
      return targetIndex;
    });
  }

  function remove(targetIndex) {
    setTimeout(() => {
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
                }`}
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
                  onClick={() => remove(index)}
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
      {/* {projectsState.length < 3 && (
        <img
          alt="arrow"
          src="./public/static/images/arrow.svg"
          className="next"
          onClick={() => clicked(currentIndex == 0 ? 1 : 0)}
        >
          next
        </img>
      )} */}
    </div>
  );
};

export default Carousel3D;
