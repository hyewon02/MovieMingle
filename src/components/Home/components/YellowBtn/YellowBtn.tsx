import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./YellowBtn.module.css";

interface BtnProps{
    btnName:string;
}

export default function YellowBtn({btnName}:BtnProps) {
    return (
        <button className={styles.bmBtn}>
            {btnName}
            <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
        </button>
    )
}