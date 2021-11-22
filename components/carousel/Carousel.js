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
              <img src={project.image} alt={project.title}></img>
              <div className="description">
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <a href={project.url}>{project.url}</a>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img src="/joao-mobile.png" alt={""}></img>
          <p>
            A website I created for João Vedana, a musician. It is built with{" "}
            <strong className="mono normalize">NextJS</strong> and a CMS called
            Sanity. The system is set up in a way that whenever the content
            changes Vercel creates new static files to be served, which provides
            for a fast load time and makes it SEO-friendly. <br />
            <a href="https://www.joaovedana.com/">https://www.joaovedana.com</a>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/regexpert-mobile.png" alt={""}></img>
          <p>
            I love{" "}
            <strong className="mono normalize">regular expressions</strong>.
            They are short and powerful, but often hard to read. Javascript
            provides some methods to handle regular expressions. I decided to
            make a small webapp that lets you test various regExp methods on
            strings, and outputs colored data. <br />
            <a
              target="_blank"
              href="https://regexp-tester.netlify.app/"
              rel="noreferrer"
            >
              https://regexp-tester.netlify.app
            </a>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/degarage-mobile.png" alt={""}></img>
          <p>
            A visual artists (responsive) website that Ive built with{" "}
            <span className="mono normalize">NextJS</span>. It is mainly used
            for displaying images of upcoming exhibitions, so I made sure that
            all images are lazy loaded (using Javascripts{" "}
            <span className="mono normalize">intersection observer API</span>).
            The website is in Dutch.{" "}
            <a
              href="https://www.ateliergaleriedegarage.nl/"
              target="_blank"
              rel="noreferrer"
            >
              www.ateliergaleriedegarage.nl
            </a>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/moviematcher-mobile.png" alt={""}></img>
          <p>
            A full stack project: create an account, rate movies, connect with
            friends and find out which movie you both interested in. It uses{" "}
            <span className="mono normalize">VueJS</span> in the front,{" "}
            <span className="mono normalize">Express</span> in the back. I
            implemented authentication, authorization, client-side rendering and
            web-sockets.
            <a
              href="https://incredible-movie-matcher.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://incredible-movie-matcher.herokuapp.com
            </a>
          </p>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
