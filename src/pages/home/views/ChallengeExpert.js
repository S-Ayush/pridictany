import React, { useEffect, useRef, useState } from "react";
import expert1 from "../../../assets/Home/expert/expert 1.png";
import expert2 from "../../../assets/Home/expert/expert 2.png";
import expert3 from "../../../assets/Home/expert/expert 3.png";
import Button from "../../../components/buttons/Button";
import styles from "../Home.module.scss";

const data = [
  { img: expert1, name: "expert" },
  { img: expert2, name: "expert" },
  { img: expert3, name: "expert" },
  { img: expert3, name: "expert" },
  { img: expert1, name: "expert" },
  { img: expert2, name: "expert" },
  { img: expert2, name: "expert" },
  { img: expert3, name: "expert" },
  { img: expert1, name: "expert" },
];

const ChallengeExpert = () => {
  const [currentDisplayIndex, setCurrentDispalyIndex] = useState(0);
  const currentDisplayIndexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      currentDisplayIndexRef.current =
        currentDisplayIndexRef.current + 3 >= data.length - 1
          ? 0
          : currentDisplayIndexRef.current + 3;
      setCurrentDispalyIndex(currentDisplayIndexRef.current);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.challengeExpertContainer}>
      <div className={styles.challengeExpertBlackBG}></div>
      <div className={styles.imageContainer}>
        {data
          // .slice(currentDisplayIndex, currentDisplayIndex + 3)
          .map((item, index) => (
            <div
              className={`${styles.imageItem} ${
                index >= currentDisplayIndex && index <= currentDisplayIndex + 2
                  ? styles.visible
                  : styles.hidden
              }`}
              style={{
                transform: `translateX(-${Math.floor(index / 3) * 300}%)`,
              }}
            >
              <img src={item.img} alt={item.name} />
            </div>
          ))}
      </div>
      <div className={styles.contentText}>
        <p className={styles.title}>Challenge Expert</p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          dolor ac odio maximus sodales.
        </p>
        <Button
          style={{
            color: "white",
            backgroundColor: "#ED1D25",
            height: "47px",
            width: "216px",
            marginTop: "25px",
          }}
          hoverText="LET'S GO!"
        >
          TAKE ME THERE
        </Button>
      </div>
    </div>
  );
};

export default ChallengeExpert;
