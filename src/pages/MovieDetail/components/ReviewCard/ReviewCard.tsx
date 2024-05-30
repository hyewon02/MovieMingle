import { StyleSheet, Text } from "react-native";
import styles from "./ReviewCard.module.css";
import { ReactNode, useState } from "react";

interface cardProps {
  children: ReactNode;
}

export default function ReviewCard({ children }: cardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.cardContainer}>
      {!open ? (
        <>
          <Text numberOfLines={4} ellipsizeMode="tail" style={style.card}>
            {children}
          </Text>
          <p
            className={styles.moreBtn}
            onClick={() => setOpen((open) => !open)}
          >
            MORE
          </p>
        </>
      ) : (
        <>
          <div>{children}</div>
          <p
            className={styles.moreBtn}
            onClick={() => setOpen((open) => !open)}
          >
            LESS
          </p>
        </>
      )}
    </div>
  );
}

const style = StyleSheet.create({
  card: {
    color: "white",
    fontSize: 16,
  },
});
