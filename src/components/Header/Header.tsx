import styles from "./Header.module.css";
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.wrap}>
                    <IoMenu style={{ fontSize: "30px", cursor: "pointer" }} />
                    <h3>MovieMingle</h3>
                    <div style={{ cursor: "pointer" }}>Search</div>
                </div>
            </div>
        </div>
    )
}