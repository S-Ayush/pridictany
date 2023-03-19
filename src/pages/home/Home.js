import React from "react";
import styles from "./Home.module.scss";
import ChallengeExpert from "./views/ChallengeExpert";
import LatestPredictionNews from "./views/LatestPredictionNews";
import ManagerPerformance from "./views/ManagerPerformance";
import TopAndBottomPredictor from "./views/TopAndBottomPredictor";
import TrendingPredictions from "./views/TrendingPredictions";
import UserPredictionChallenge from "./views/UserPredictionChallenge";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <ManagerPerformance />
      <TopAndBottomPredictor />
      <LatestPredictionNews />
      <ChallengeExpert />
      <TrendingPredictions />
      <UserPredictionChallenge />
    </div>
  );
};

export default Home;
