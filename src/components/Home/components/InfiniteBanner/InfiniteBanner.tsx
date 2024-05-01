import styles from "./InfiniteBanner.module.css";

export default function InfiniteBanner() {
    const banner = "Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination."

    return (
        <div className={styles.wrapper}>
            <div className={styles.slideContainer}>
                <div className={styles.slideWrapper}>
                    <span className={`${styles.original} ${styles.slide}`}>
                        {banner.repeat(3)}
                    </span>
                    <span className={`${styles.clone1} ${styles.slide}`}>
                        {banner.repeat(3)}
                    </span>
                </div>
            </div>
        </div>
    )
}