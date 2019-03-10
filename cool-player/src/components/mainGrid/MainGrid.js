import React from "react";
import styles from "./styles.module.css";
import Header from "../header/Header";
import List from "../list/List";
import Screen from "../Screen/Screen";

const MainGrid = props => {
  return (
    <div className={styles.mainGrid}>
      <Header />
      <List />
      <Screen />
    </div>
  );
};

export default MainGrid;
