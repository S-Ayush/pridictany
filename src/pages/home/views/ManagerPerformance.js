import React from "react";
import managerImage from "../../../assets/Home/Jim Cramer PNG 1.png";
import Button from "../../../components/buttons/Button";
import upArrow from "../../../assets/upArrowGreenIcon.png";
import downArrow from "../../../assets/downArrowRedIcon.png";
import teslaImg from "../../../assets/Home/companyLogo/tesla.png";
import styles from "../Home.module.scss";

const PredictionView = ({ type, action, percentage, isIncreased }) => {
  return (
    <div className={styles.predictionView}>
      <p className={styles.title}>{type} Prediction</p>
      <div className={styles.prediction}>
        <button
          className={styles.action}
          style={{ backgroundColor: type === "Best" ? "#0E970B" : "#ED1D25" }}
        >
          {action}
        </button>
        <div className={styles.company}>
          <img src={teslaImg} className={styles.companyImg} />
          <div className={styles.companyText}>
            <div className={styles.companyTitle}>TSLA</div>
            <div className={styles.companyName}>Tesla INC</div>
          </div>
        </div>
        <div
          className={styles.percentage}
          style={{ color: type === "Best" ? "#0E970B" : "#ED1D25" }}
        >
          {isIncreased ? "+" : "-"}
          {percentage}%{" "}
          <img
            src={type === "Best" ? upArrow : downArrow}
            alt={type === "Best" ? "up Arrow" : "Down Arrow"}
          />
        </div>
      </div>
    </div>
  );
};

const ManagerPerformance = () => {
  return (
    <div className={styles.managerPerformanceContainer}>
      <div className={styles.managerInfo}>
        <div className={styles.info}>
          <div>
            <p>
              Jim Cramer made 1,500 stock predictions in 2022. <br />
              <span style={{ color: "#ED1D25" }}>How was his performance?</span>
            </p>
            <Button
              style={{
                color: "white",
                backgroundColor: "#ED1D25",
                height: "47px",
                width: "216px",
                marginTop: "-15px",
              }}
              hoverText="LET'S GO!"
            >
              FIND OUT
            </Button>
          </div>
        </div>
        <div className={styles.managerImage}>
          <img src={managerImage} alt="Jim Carmer" />
        </div>
      </div>
      <div className={styles.predictionContainer}>
        <PredictionView
          type="Best"
          action="BUY"
          percentage={45}
          isIncreased={true}
        />
        <PredictionView
          type="Worst"
          action="BUY"
          percentage={74}
          isIncreased={false}
        />
        <div className={styles.averageReturn}>
          <p className={styles.title}>Average Return (%)</p>
          <div className={styles.signUp}>
            <p>SIGN-UP FOR FREE</p>
            <Button
              style={{
                width: "168px",
                height: "27px",
                backgroundColor: "white",
                fontWeight: 500,
                fontSize: "13px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPerformance;
