import MovieImage from "../MovieImage/MovieImage";
import { FaStar } from "react-icons/fa";
import styles from "./MostPopularMovieCard.module.css";
import YellowBtn from "../YellowBtn/YellowBtn";

type mpmProp = {
    movies: {
        movieTitle: string;
        storyLine: string;
        tag: string[];
        rate: string;
        image: string;
    }
}
export default function MostPopularMovieCard({ movies }: mpmProp) {
    return (
        <div className={styles.mpmContainer}>
            <div className={styles.mpmWrapper}>
                <div style={{ margin: "0 auto",cursor:"pointer" }}>
                    <MovieImage
                        img={movies.image}
                        height="350px"
                        width="240px"
                        margin="0 auto"
                    />
                </div>
                <div className={styles.mpmTitle}>{movies.movieTitle}</div>
                <div className={styles.mpmTag}>
                    {movies.tag.map((t,i) => (
                        <div key={i} className={styles.tag}>{t}</div>
                    ))}
                </div>
                <div className={styles.mpmRating}>
                    <FaStar style={{ color: "#fae04c" }} />
                    <p style={{ margin: "5px 5px", color: "gray" }}><strong style={{ color: "white" }}>{movies.rate}</strong>/10</p>
                </div>
                <YellowBtn btnName="Review" />
            </div>
        </div>
    )
}