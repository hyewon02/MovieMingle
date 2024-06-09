import { useState } from "react";
import { getSearchMovies } from "../../API/MovieAPI";
import { Movie } from "../../types/movie";
import MostPopularMovieCard from "../Home/components/MostPopularMovieCard/MostPopularMovieCard";
import styles from "./Search.module.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState<Movie[]>([]);
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleClick = async () => {
    const searchResult = await getSearchMovies(search);
    console.log("sr:", searchResult);
    setSearchMovie(searchResult);
  };
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <h1 className={styles.title}>Search Movie</h1>

      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className={styles.searchBtn} onClick={handleClick}>
          Search
        </button>
      </div>

      <div className={styles.movieContainer}>
        {searchMovie.map((movie, i) => (
          <MostPopularMovieCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
