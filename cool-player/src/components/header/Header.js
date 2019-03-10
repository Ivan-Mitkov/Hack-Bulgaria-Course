import React from "react";
import styles from "./styles.module.css";

const Header = props => {
  return (
    <div id={styles.header}>
      <div id={styles.appName}>Hack Player</div>
    </div>
  );
};

export default Header;
