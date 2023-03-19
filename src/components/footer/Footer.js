import React from "react";
import logo from "../../assets/navBar/logo 2.png";
import twitterIcon from "../../assets/socialIcons/twitter.png";
import discordIcon from "../../assets/socialIcons/discord.png";
import youtubeIcon from "../../assets/socialIcons/youtube.png";
import telegramIcon from "../../assets/socialIcons/telegram.png";
import facebookIcon from "../../assets/socialIcons/facebook.png";
import instagramIcon from "../../assets/socialIcons/instagram.png";
import tiktocIcon from "../../assets/socialIcons/tiktoc.png";
import styles from "./Footer.module.scss";
import Button from "../buttons/Button";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.aboutSection}>
        <div className={styles.contentArea}>
          <h1>
            Want names of the so-called 'experts' on TV you should avoid like
            the plague?{" "}
          </h1>
          <p>
            Gain exclusive access to our curated list of predictions from the
            top American stock experts, along with valuable resources to help
            you become a skilled analyst.
          </p>
          <ul className={styles.links}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
          <p style={{ marginTop: "40px" }}>Join our community!</p>
          <div className={styles.socialLinks}>
            <a href="https://www.twitter.com">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="https://www.discord.com">
              <img src={discordIcon} alt="discord" />
            </a>
            <a href="https://www.youtube.com">
              <img src={youtubeIcon} alt="youtube" />
            </a>
            <a href="https://www.telegram.com">
              <img src={telegramIcon} alt="telegram" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a href="https://www.tiktoc.com">
              <img src={tiktocIcon} alt="tiktoc" />
            </a>
          </div>
        </div>
        <div className={styles.formSection}>
          <h1>Don’t miss out</h1>
          <p>Enter your email now to stay ahead of the game!</p>
          <div className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email address" />
          </div>
          <p style={{ marginTop: "25px" }}>
            Join Our Elite, Members-Only, Email List Today
          </p>
          <h3 style={{ fontSize: "20px", marginTop: "-20px" }}>
            (We will close entry to it soon)!{" "}
          </h3>
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
            SAY NO MORE
          </Button>
        </div>
      </div>
      <div className={styles.companyInfo}>
        <img src={logo} alt="Predictany" />
        <p>© 2020-2023 Predictany. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
