import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.wrap}>
          <IoMenu style={{ fontSize: "30px", cursor: "pointer" }} />
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h3>MovieMingle</h3>
          </Link>
          <div style={{ cursor: "pointer" }}>Search</div>
        </div>
      </div>
    </div>
  );
}
