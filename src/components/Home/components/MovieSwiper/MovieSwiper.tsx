import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import MostPopularMovieCard from '../MostPopularMovieCard/MostPopularMovieCard';

type movieProp = {
    movies: {
        movieTitle: string;
        storyLine: string;
        tag: string[];
        rate: string;
        image: string;
    }[]
}

export default function MovieSwiper({
    movies,
}: movieProp) {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y, Virtual]}
                slidesPerView={4}
                spaceBetween={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                virtual
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <MostPopularMovieCard movies={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
