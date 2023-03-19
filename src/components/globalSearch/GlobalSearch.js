import React from "react";
import searchIcon from "../../assets/Search_alt.png";
import styles from "./GlobalSearch.module.scss";

const GlobalSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <img src={searchIcon} alt="searchIcon" />
      <input type="text" placeholder="Search Stocks, Name" />
    </div>
  );
};

export default GlobalSearch;
