import styles from "./MovieSwiper.module.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../MovieSwiper/movieSwiper.css";
import { Movie } from "../../../../types/movie";
import MostPopularMovieCard from "../../../Home/components/MostPopularMovieCard/MostPopularMovieCard";

interface ImageSwiperProps {
  movies: Movie[] | undefined;
}
export default function MovieSwiper({ movies }: ImageSwiperProps) {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="movieSwiper"
      >
        {movies?.map((movie) => (
          <SwiperSlide>
            <MostPopularMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
