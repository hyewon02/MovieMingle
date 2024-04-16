import styles from "./HomeSection.module.css"
type sectionProps={
    title:string;
    subtitle:string;
    children:any;
}
export default function HomeSection({ title,subtitle,children }:sectionProps) {
    return (
        <div className={styles.HomeSectionContainer}>
            <div className={styles.homeSectionTitle}>
                <div>{title}</div>
                <p>{subtitle}</p>
            </div>
            {children}
        </div>
    )
}