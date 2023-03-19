import React from "react";
import JaneImg from "../../../assets/Home/predictionChallenge/Jane Doe.png";
import JohnImg from "../../../assets/Home/predictionChallenge/John Doe.png";
import PredictionChalImg from "../../../assets/Home/predictionChallenge/predictionChal.png";
import styles from "../Home.module.scss";

const UserPredictionChallenge = () => {
  return (
    <div className={styles.userPredictionChallengeContainer}>
      <div className={styles.blackBG}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          USER PREDICTION <br />
          CHALLENGE
        </h1>
        <div className={styles.leftPre}>
          <img src={JaneImg} alt="Jane" />
          <div className={styles.blackTape}>Marketpredictor</div>
        </div>
        <div className={styles.rightPre}>
          <img src={JohnImg} alt="John" />
          <div className={styles.blackTape}>Predictany007</div>
        </div>
        <img
          src={PredictionChalImg}
          alt="prediction challange"
          className={styles.predictionChallangeImg}
        />
      </div>
    </div>
  );
};

export default UserPredictionChallenge;
