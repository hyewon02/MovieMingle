import styles from "./MovieImage.module.css";
interface movieImgProps{
    img:string;
    height:string;
    width:string;
    margin:string;
}
export default function MovieImage({img,height,width,margin}:movieImgProps) {
    return (
        <div className={styles.movieImgBox} style={{height: height,width: width, margin:margin}}>
            <div className={styles.movieImg} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185${img})` }}></div>
        </div>
    )
}