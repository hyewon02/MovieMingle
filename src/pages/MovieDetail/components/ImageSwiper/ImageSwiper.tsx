import { MovieImages } from "../../../../types/movieImages";
import MovieImage from "../../../Home/components/MovieImage/MovieImage";
import styles from "./ImageSwiper.module.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../ImageSwiper/imageSwiper.css";

interface ImageSwiperProps {
  movieImages: MovieImages | undefined;
}

export default function ImageSwiper({ movieImages }: ImageSwiperProps) {
  const displayImages = movieImages?.backdrops.slice(0, 4);
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="imgSwiper"
      >
        {displayImages?.map((img) => (
          <SwiperSlide>
            <MovieImage
              img={img.file_path}
              height="500px"
              width=""
              margin="0 auto"
            />
          </SwiperSlide>
        ))}
        <div style={{ height: "50px" }}></div>
      </Swiper>
    </>
  );
}
