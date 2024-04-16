import styles from "./InfiniteBanner.module.css";

export default function InfiniteBanner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slideContainer}>
                <div className={styles.slideWrapper}>
                    <span className={`${styles.original} ${styles.slide}`}>
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                    </span>
                    <span className={`${styles.clone1} ${styles.slide}`}>
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                        Dive into endless movie enchantment! Keep scrolling for a cinematic journey beyond imagination.
                    </span>
                </div>
            </div>
        </div>
    )
}