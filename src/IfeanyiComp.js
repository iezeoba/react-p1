import React, { useState } from 'react';

function IfeanyiComp(props) {
    console.log(props);
    const [count, setCount] = useState(1000);

    function myOnClick(e) {
        //setCount(count + 1);
        //console.log("We just clicked IfeanyiComp", count);
        //console.log("We just clicked IfeanyiComp");
        //props.countFunc();
    }
    return (
        <div>
            <h1 onClick = {props.countFunc}>Hello World from Ifeanyi.{props.countx}</h1>
            {/*<h1 onClick = {myOnClickCount}>Hello World: count {count}</h1> */}
        </div>
    );
}
export default IfeanyiComp;