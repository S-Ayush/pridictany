import React from "react";
import Button from "../../../components/buttons/Button";
import coverImage from "../../../assets/Home/trendingPredictionImg.png";
import RivianImg from "../../../assets/Home/companyLogo/pre-rivian.png";
import AppleImg from "../../../assets/Home/companyLogo/pre-apple.png";
import BitcoinImg from "../../../assets/Home/companyLogo/pre-bitcoin.png";
import SnapImg from "../../../assets/Home/companyLogo/pre-snap.png";
import styles from "../Home.module.scss";

const data = [
  {
    name: "1. Stock",
    type: "Trending this week",
    img: RivianImg,
    desc: "Rivian Automotive, Inc.",
    prediction: "852 predictions",
  },
  {
    name: "2. Stock",
    type: "Trending Today",
    img: AppleImg,
    desc: "Apple, Inc.",
    prediction: "122 predictions",
  },
  {
    name: "3. Crypto Currency",
    type: "Trending",
    img: BitcoinImg,
    desc: "Bitcoin",
    prediction: "852 Today, 2341 This Week",
  },
  {
    name: "4. Stock",
    type: "Trending this week",
    img: SnapImg,
    desc: "Snap Inc.",
    prediction: "2341 This Week",
  },
];

const TrendingPredictions = () => {
  return (
    <div className={styles.trendingPredictionsContainer}>
      <div className={styles.showOffText}>
        <h1>Trending Predictions From Experts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          dolor ac odio maximus sodales. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Mollitia architecto quos enim quibusdam fugit
          deleniti quia et iure non, praesentium error voluptates dolorum est
          aperiam aliquam blanditiis ipsum eius quas?
        </p>
        <Button
          style={{
            color: "white",
            backgroundColor: "#ED1D25",
            height: "47px",
            width: "216px",
            marginTop: "5px",
          }}
          hoverText="LET'S GO!"
        >
          SEE EXPERTS PREDICTIONS
        </Button>
        <div className={styles.coverImage}>
          <img src={coverImage} alt="coverImage" />
        </div>
      </div>
      <div className={styles.predictions}>
        {data.map((item, index) => {
          return (
            <div
              className={styles.subCard}
              // style={{
              //   boxShadow:
              //     index === 0
              //       ? "0px 0px 78px rgba(30, 255, 30, 0.75)"
              //       : "0px 4px 16px rgba(0, 0, 0, 0.25)",

              //   transform: index === 0 && "scale(1.2) translateY(-12px)",
              //   zIndex: index === 0 ? 1 : "inherit",
              // }}
            >
              <div className={styles.title}>
                <p>{item.name}</p>
                <ul>
                  <li>{item.type}</li>
                </ul>
              </div>
              <h1>
                <img src={item.img} alt={item.desc} />
                {item.desc}
              </h1>
              <div
                className={styles.pred}
                style={{ marginLeft: index === 0 && "35px" }}
              >
                <p>{item.prediction}</p>
                <a>View more</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingPredictions;
