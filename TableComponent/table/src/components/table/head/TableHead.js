import React from 'react';
import uuid4 from 'uuid4';
const TableHead=(props)=>{
    console.log('TableHead: ',props.head);
    return(
        <thead>
            <tr>
                {props.head.map(x=>{
                   return <th key={uuid4()}>{x}</th>
                })}
            </tr>
        </thead>
    )
}

export default TableHead;