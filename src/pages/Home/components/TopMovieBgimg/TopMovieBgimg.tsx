import { useEffect, useState } from "react";
import { Movie } from "../../../../types/movie";
import { MovieImages } from "../../../../types/movieImages";
import styles from "./TopMovieBgimg.module.css";
import { getMovieImages } from "../../../../API/MovieAPI";

interface topMovieProps {
  topMovie: Movie | undefined;
}

export default function TopMovieBgimg({ topMovie }: topMovieProps) {
  const [movieImg, setMovieImg] = useState<MovieImages>();
  useEffect(() => {
    getMovieImages(`${topMovie?.id}`).then((data) => setMovieImg(data));
  }, []);
  return (
    <div
      className={styles.bgImg}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieImg?.backdrops[0].file_path})`,
      }}
    ></div>
  );
}
