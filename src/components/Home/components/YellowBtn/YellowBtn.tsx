import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./YellowBtn.module.css";

interface BtnType{
    btnName:string;
}

export default function YellowBtn({btnName}:BtnType) {
    return (
        <button className={styles.bmBtn}>
            {btnName}
            <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
        </button>
    )
}