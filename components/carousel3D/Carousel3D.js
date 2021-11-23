import { useState } from "react";

//data
import projects from "../../data/projects.json";

const Carousel3D = () => {
  const [currentDeg, setCurrentDeg] = useState(0);
  const turnDeg = 360 / projects.length;
  function next() {
    setCurrentDeg((p) => p - turnDeg);
  }
  function prev() {
    setCurrentDeg((p) => p + turnDeg);
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
            return (
              <div
                className="item"
                style={{
                  transform: `rotateY(${turnDeg * index}deg) translateZ(360px)`,
                }}
                key={project.title}
              >
                <h4>{project.title}</h4>
                <img src={project.image} alt="" style={{ width: "30%" }} />
                <p>{project.description}</p>
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
