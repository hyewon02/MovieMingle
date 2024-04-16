import styles from "./MovieImage.module.css";
interface ImgType{
    img:string;
    height:string;
    width:string;
    margin:string;
}
export default function MovieImage({img,height,width,margin}:ImgType) {
    return (
        <div className={styles.movieImgBox} style={{height: height,width: width, margin:margin}}>
            <div className={styles.movieImg} style={{ backgroundImage: `url(${img})` }}></div>
        </div>
    )
}