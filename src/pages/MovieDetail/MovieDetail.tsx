import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../../types/movieDetails";
import {
  getMovieDetails,
  getMovieImages,
  getReviews,
  getSimilarMovies,
} from "../../API/MovieAPI";
import styles from "./MovieDetail.module.css";
import MovieImage from "../Home/components/MovieImage/MovieImage";
import { MovieImages } from "../../types/movieImages";
import ImageSwiper from "./components/ImageSwiper/ImageSwiper";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import HomeSection from "../Home/components/HomeSection/HomeSection";
import { Reviews } from "../../types/reviews";
import { Movie } from "../../types/movie";
import MovieSwiper from "./components/MovieSwiper/MovieSwiper";
export default function MovieDetail() {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [movieImages, setMovieImages] = useState<MovieImages>();
  const [movieReviews, setMovieReviews] = useState<Reviews[]>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        Promise.all([
          getMovieDetails(movieID),
          getMovieImages(movieID),
          getReviews(movieID),
          getSimilarMovies(movieID),
        ]).then(([details, images, reviews, similar]) => {
          setMovieDetails(details);
          setMovieImages(images);
          setMovieReviews(reviews);
          setSimilarMovies(similar);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieList();
  }, [movieID]);

  return (
    <div className={styles.detailContainer}>
      <div style={{ height: "100px" }}></div>
      <h1 className={styles.title}>{movieDetails?.title}</h1>
      <ImageSwiper movieImages={movieImages} />

      <div style={{ marginTop: "30px" }}>
        <HomeSection title="Storyline" subtitle="">
          <div className={styles.storyline}>{movieDetails?.overview}</div>
          {movieDetails?.genres.map((genre) => (
            <div className={styles.genres}>{genre.name}</div>
          ))}
        </HomeSection>
      </div>

      <div style={{ marginTop: "70px" }}>
        <HomeSection title="Similar" subtitle="">
          <div style={{ margin: "20px 0" }}>
            <MovieSwiper movies={similarMovies} />
          </div>
        </HomeSection>
      </div>

      <div style={{ marginTop: "70px" }}>
        <HomeSection title="Reviews" subtitle="">
          {movieReviews?.map((review) => (
            <div style={{ margin: "20px 0" }}>
              <ReviewCard>
                <div>{review.content}</div>
              </ReviewCard>
            </div>
          ))}
        </HomeSection>
      </div>

      <div style={{ height: "180px" }}></div>
    </div>
  );
}
