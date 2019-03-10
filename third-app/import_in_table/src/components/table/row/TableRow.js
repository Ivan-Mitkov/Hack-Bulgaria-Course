import React from "react";
import uuid4 from "uuid4";
//receive Map as prop.data and Array as props.head
const TableRow = props => {
  //   const data = Object.entries(props.data);
//   console.log("TableRow", props.data);
//   console.log("TableHead: ", props.head);
  return (
    <tr>
        {props.head.map(k=>{
            return <td key={uuid4()}>{props.data.get(k)}</td>;
        })}
    </tr>
  );
};

export default TableRow;
