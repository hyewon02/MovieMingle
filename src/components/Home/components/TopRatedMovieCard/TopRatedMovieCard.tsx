import styles from "./TopRatedMovieCard.module.css"
import MovieImage from "../MovieImage/MovieImage";
import YellowBtn from "../YellowBtn/YellowBtn";

interface BMCardProps {
    id: Number;
    bmTitle: string;
    bmText: string;
    bmImg: string;
    onMovie: Number;
}

export default function TopRatedMovieCard({ id, bmTitle, bmText, bmImg, onMovie }: BMCardProps) {
    return (
        <div className={styles.bestMovieContainer} style={{ width: onMovie === id ? "500px" : "190px" }}>
            <MovieImage
                img={bmImg}
                height="300px"
                width="190px"
                margin=""
            />
            {onMovie === id &&
                <div className={styles.bestMovieInfo}>
                    <div className={styles.bmTitle}>{bmTitle}</div>
                    {/* <div className={styles.bmText}>{bmText}</div> */}
                    <YellowBtn btnName="More Information" />
                </div>
            }
        </div>
    )
}