import React from "react";
import Logo from "../../assets/navBar/Logo";
import Button from "../buttons/Button";
import GlobalSearch from "../globalSearch/GlobalSearch";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.navlinkContainer}>
        <ul>
          <li className={styles.active}>Home</li>
          <li>Predictions</li>
          <li>Ranking</li>
          <li>Challenges</li>
          <li>Dashboard</li>
          <li>News</li>
        </ul>
      </div>
      <GlobalSearch />
      <Button
        style={{
          color: "white",
          backgroundColor: "#ED1D25",
          marginLeft: "20px",
        }}
      >
        Predict Now
      </Button>
      <p className={styles.register}>Register</p>
      <p className={styles.register}>Sign In</p>
    </div>
  );
};

export default NavBar;
