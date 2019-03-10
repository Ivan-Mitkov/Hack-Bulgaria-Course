import React from "react";
import styles from "./styles.module.css";

const ListItem = props => {
 
  return (
    <div className={styles.listItem}>
      <li >
        <span>{props.id} </span>
        {`${props.artist} : ${props.name}`}
      </li>
    </div>
  );
};

export default ListItem;
