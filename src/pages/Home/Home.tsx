import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TopRatedMovieCard from "./components/TopRatedMovieCard/TopRatedMovieCard";
import InfiniteBanner from "./components/InfiniteBanner/InfiniteBanner";
import MostPopularMovieCard from "./components/MostPopularMovieCard/MostPopularMovieCard";
import HomeSection from "./components/HomeSection/HomeSection";
import { getMostPopularMovies, getTopRatedMovies } from "../../API/MovieAPI";
import { Movie } from "../../types/movie";
import { Link } from "react-router-dom";
import TopMovieBgimg from "./components/TopMovieBgimg/TopMovieBgimg";

export default function Home() {
  const [onMovie, setOnMovie] = useState(0);
  const [mostPopularMovies, setMostPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        Promise.all([getMostPopularMovies(), getTopRatedMovies()]).then(
          ([mpmData, trmData]) => {
            setMostPopularMovies(mpmData);
            setTopRatedMovies(trmData);
          }
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieList();
  }, []);

  const displayedMpMovies = mostPopularMovies.slice(0, 5);
  const topMovies = topRatedMovies.slice(0, 2);
  return (
    <div className={styles.homeContainer}>
      <div style={{ height: "100px" }}></div>
      <h1 className={styles.title}>MovieMingle</h1>
      <div className={styles.bgImgBox}>
        {topMovies.map((topMovie, i) => (
          <>{i === onMovie && <TopMovieBgimg topMovie={topMovie} />}</>
        ))}
      </div>
      <div className={styles.bmContainer}>
        {topMovies.map((topMovie, i) => (
          <div onClick={() => setOnMovie(i)}>
            <TopRatedMovieCard
              id={i}
              bmTitle={topMovie.title}
              bmText={topMovie.overview}
              bmImg={topMovie.poster_path}
              onMovie={onMovie}
            />
          </div>
        ))}
      </div>
      <InfiniteBanner />

      <div style={{ marginTop: "210px" }}>
        <HomeSection
          title="Most Popular Movies"
          subtitle="As determined by IMDb users"
        >
          <div className={styles.mpMovies}>
            {displayedMpMovies.map((movie, i) => (
              <MostPopularMovieCard movie={movie} key={i} />
            ))}
          </div>
          <Link to={"/popular"} style={{ textDecoration: "none" }}>
            <button className={styles.showMoreBtn}>View More</button>
          </Link>
        </HomeSection>
      </div>
      <div style={{ marginTop: "210px" }}>
        <HomeSection
          title="IMDb Top 10 Movies"
          subtitle="As rated by regular IMDb voters"
        >
          <div></div>
        </HomeSection>
      </div>
    </div>
  );
}
