import React from "react";
import Button from "../../../components/buttons/Button";
import image from "../../../assets/Home/topBottomPredictorImg.png";
import styles from "../Home.module.scss";

const TopAndBottomPredictor = () => {
  return (
    <div className={styles.topAndBottomPredictorContainer}>
      <div className={styles.blackBG}></div>
      <div style={{ marginBottom: "100px", marginLeft: "46%", zIndex: 1 }}>
        <p className={styles.yearlyTitle}>
          Want to know Top 10 and bottom 10 <br />
          <span style={{ color: "#ED1D25" }}>PREDICTORS</span> during 2022?
        </p>
        <p className={styles.verfiedText}>
          500 investment TV experts and social media influencers verified
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
      <img className={styles.image} src={image} alt="image" />
    </div>
  );
};

export default TopAndBottomPredictor;
