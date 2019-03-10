import React from "react";
import TableHead from "./head/TableHead";
import TableRow from "./row/TableRow";
import uuid4 from "uuid4";

//receives props.head as Array and props.data as array of objects
const Table = props => {
  let rowAsMap=null;
  return (
    
    <table>
      {<TableHead head={props.head} />}
      <tbody>        
        {props.rows.map(x => {
          {rowAsMap=new Map(Object.entries(x))}
          console.log('Table row', rowAsMap)
          return <TableRow key={uuid4()} data={rowAsMap} head={props.head}/>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
