import styles from "./TopRatedMovieCard.module.css";
import MovieImage from "../MovieImage/MovieImage";
import YellowBtn from "../YellowBtn/YellowBtn";
import { Link } from "react-router-dom";

interface BMCardProps {
  id: Number;
  bmTitle: string;
  bmText: string;
  bmImg: string;
  onMovie: Number;
  movieId: number;
}

export default function TopRatedMovieCard({
  id,
  bmTitle,
  bmText,
  bmImg,
  onMovie,
  movieId,
}: BMCardProps) {
  return (
    <div
      className={styles.bestMovieContainer}
      style={{ width: onMovie === id ? "500px" : "190px" }}
    >
      <MovieImage img={bmImg} height="300px" width="190px" margin="" />
      {onMovie === id && (
        <div className={styles.bestMovieInfo}>
          <div className={styles.bmTitle}>{bmTitle}</div>
          <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }}>
            <YellowBtn btnName="More Information" />
          </Link>
        </div>
      )}
    </div>
  );
}
