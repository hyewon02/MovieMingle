import { useEffect, useState } from "react";
import MostPopularMovieCard from "../Home/components/MostPopularMovieCard/MostPopularMovieCard";
import { getMostPopularMovies } from "../../API/MovieAPI";
import { Movie } from "../../types/movie";
import styles from "./MostPopularMovie.module.css";

export default function MostPopularMovie() {
  const [mostPopularMovies, setMostPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        getMostPopularMovies().then((mpmData) => {
          setMostPopularMovies(mpmData);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieList();
  }, []);

  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.movieContainer}>
        {mostPopularMovies.map((movie, i) => (
          <MostPopularMovieCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
