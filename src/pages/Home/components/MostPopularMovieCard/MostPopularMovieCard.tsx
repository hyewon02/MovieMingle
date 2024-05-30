import MovieImage from "../MovieImage/MovieImage";
import { FaStar } from "react-icons/fa";
import styles from "./MostPopularMovieCard.module.css";
import YellowBtn from "../YellowBtn/YellowBtn";
import { Movie } from "../../../../types/movie";
import { Link } from "react-router-dom";

interface mpmCardProps {
  movie: Movie;
}
export default function MostPopularMovieCard({ movie }: mpmCardProps) {
  return (
    <div className={styles.mpmContainer}>
      <div className={styles.mpmWrapper}>
        <Link to={`/popular/${movie.id}`} style={{ textDecoration: "none" }}>
          <div style={{ margin: "0 auto", cursor: "pointer" }}>
            <MovieImage
              img={movie.poster_path}
              height="350px"
              width="240px"
              margin="0 auto"
            />
          </div>
          <div className={styles.mpmTitle}>{movie.title}</div>
          <div className={styles.mpmRating}>
            <FaStar style={{ color: "#fae04c" }} />
            <p style={{ margin: "5px 5px", color: "gray" }}>
              <strong style={{ color: "white" }}>{movie.vote_average}</strong>
              /10
            </p>
          </div>
        </Link>
        <YellowBtn btnName="Review" />
      </div>
    </div>
  );
}
