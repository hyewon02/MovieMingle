import styles from "./HomeSection.module.css";
import { ReactNode } from "react";
type sectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};
export default function HomeSection({
  title,
  subtitle,
  children,
}: sectionProps) {
  return (
    <div className={styles.HomeSectionContainer}>
      <div className={styles.homeSectionTitle}>
        <div>{title}</div>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
