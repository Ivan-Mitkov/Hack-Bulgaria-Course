import React from "react";
import uuid4 from 'uuid4'
import classes from "./Grid.module.css";
//props.cols props.rows props.rowWidth
const Grid = props => {
    let rows=[];
    for(let i=0; i<props.rows*(props.cols||1);i++){
       
        rows.push(<div key={uuid4()} className={classes.item}>elem</div>)
    }
    
  return (
    <div  className={`${classes.container}`}>
       {rows}
    </div>
  );
};

export default Grid;
