/* eslint-disable @next/next/no-img-element */

//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

//data
import projects from "../../data/projects.json";

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
          project.description = project.description.replace(
            /\*(\S*)\*/g,
            '<span class="highlight normalize">$1</span>'
          );
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
                <a href={project.url}>{project.url}</a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
