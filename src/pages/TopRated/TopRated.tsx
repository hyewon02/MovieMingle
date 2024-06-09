import { useEffect, useState } from "react";
import { Movie } from "../../types/movie";
import { getTopRatedMovies } from "../../API/MovieAPI";
import MostPopularMovieCard from "../Home/components/MostPopularMovieCard/MostPopularMovieCard";
import styles from "./TopRated.module.css";

export default function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        getTopRatedMovies().then((data) => {
          setTopRatedMovies(data);
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
      <h1 className={styles.title}>Top Rated</h1>
      <div className={styles.movieContainer}>
        {topRatedMovies.map((movie, i) => (
          <MostPopularMovieCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
