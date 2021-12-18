/* eslint-disable @next/next/no-img-element */

//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

//data
import projects from "../../data/projects.json";

//functions
import { parseToHTML } from "../../functions";

export default function App() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={true}
        spaceBetween={50}
        pagination={{
          type: "bullets",
        }}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        {projects.map((project) => {
          project.description = parseToHTML(project.description);
          return (
            <SwiperSlide key={project.title}>
              <img
                src={`/static/images-mobile/${project.image}`}
                alt={project.title}
              ></img>
              <div className="description">
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.url}
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
