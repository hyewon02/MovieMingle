import { useState } from "react";
import styles from "./Home.module.css";
import BestMovieCard from "./components/BestMovieCard/BestMovieCard";
import InfiniteBanner from "./components/InfiniteBanner/InfiniteBanner";
import MostPopularMovieCard from "./components/MostPopularMovieCard/MostPopularMovieCard";
import MostPopularMovies from "./MostPopularMovies.json";
import HomeSection from "./components/HomeSection/HomeSection";

export default function Home() {
    const [onMovie, setOnMovie] = useState(0);
    const displayedMpMovies = MostPopularMovies.movies.slice(0, 5);
    const bestMovie = [
        {
            "id": 0,
            "bmTitle": "Kung Fu Panda 4",
            "bmText": "Top Box Office (US)",
            "bmImg": "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
        },
        {
            "id": 1,
            "bmTitle": "Dune: Part Two",
            "bmText": "Top Box Office (US)",
            "bmImg": "https://diandrareviewsitall.com/wp-content/uploads/2024/02/MV5BODdjMjM3NGQtZDA5OC00NGE4LWIyZDQtZjYwOGZlMTM5ZTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
        }
    ]
    return (
        <div className={styles.homeContainer}>
            <div style={{ height: "100px" }}></div>
            <h1 className={styles.title}>MovieMingle</h1>
            <div className={styles.bgImgBox}>
                <div className={styles.bgImg} style={{ backgroundImage: `url(${bestMovie[onMovie].bmImg})` }}></div>
            </div>
            <div className={styles.bmContainer}>
                <div onClick={() => setOnMovie(0)}>
                    <BestMovieCard
                        id={bestMovie[0].id}
                        bmTitle={bestMovie[0].bmTitle}
                        bmText={bestMovie[0].bmText}
                        bmImg={bestMovie[0].bmImg}
                        onMovie={onMovie}
                    />
                </div>
                <div onClick={() => setOnMovie(1)}>
                    <BestMovieCard
                        id={bestMovie[1].id}
                        bmTitle={bestMovie[1].bmTitle}
                        bmText={bestMovie[1].bmText}
                        bmImg={bestMovie[1].bmImg}
                        onMovie={onMovie}
                    />
                </div>
            </div>
            <InfiniteBanner />

            <HomeSection title="Most Popular Movies" subtitle="As determined by IMDb users">
                <div className={styles.mpMovies}>
                    {displayedMpMovies.map((movie, i) => (
                        <MostPopularMovieCard movies={movie} key={i} />
                    ))}
                </div>
                <button className={styles.showMoreBtn}>View More</button>
            </HomeSection>

            <HomeSection title="IMDb Top 10 Movies" subtitle="As rated by regular IMDb voters">
                <div style={{height:"500px",border:"1px solid red"}}></div>
            </HomeSection>
        </div>
    )
}