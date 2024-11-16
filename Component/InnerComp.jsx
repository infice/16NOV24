import React from "react";
import {DataContext} from  "./main";

function InnerComp(props)
return(
    <ul>
        {props.data.map(item => <li key={item.id}>{item.value}</li>)}
    </ul>
);

export default InnerComp;