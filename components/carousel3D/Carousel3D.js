/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

//data
import projects from "../../data/projects.json";

const Carousel3D = () => {
  const [currentDeg, setCurrentDeg] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  //how many degees per turn depends on the projects.length:
  const turnDeg = 360 / projects.length;
  function next() {
    setCurrentDeg((p) => p - turnDeg);
    setCurrentIndex((prev) => {
      return projects[prev + 1] ? prev + 1 : 0;
    });
  }
  function prev() {
    setCurrentDeg((p) => p + turnDeg);
    setCurrentIndex((prev) => {
      return projects[prev - 1] ? prev - 1 : projects.length - 1;
    });
  }
  return (
    <div className="carousel3D">
      <div className="carousel3D__container">
        <div
          className="carousel3D__wrapper"
          style={{
            transform: `rotateY(${currentDeg}deg)`,
          }}
        >
          {projects.map((project, index) => {
            project.description = project.description.replace(
              /\*(\S*)\*/g,
              '<span class="highlight normalize">$1</span>'
            );
            return (
              <div
                className="project"
                style={{
                  transform: `rotateY(${turnDeg * index}deg) translateZ(400px)`,
                }}
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
                      autoPlay="true"
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
      <div className="next" onClick={next}>
        Next
      </div>
      <div className="prev" onClick={prev}>
        Prev
      </div>
    </div>
  );
};

export default Carousel3D;
