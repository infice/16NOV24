import React from "react";
import InnerComp from "./InnerComp";

function myComp1(props)
return(
    <div>
        <h1>My component 1</h1>
        <myComp2 data={props.data}/>
    </div>
);


function myComp2(props)
return(
    <>
        <h2>My component 2</h2>
        <InnerComp data={props.data}/>
    </>
);