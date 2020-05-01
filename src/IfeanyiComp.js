import React, { useState } from 'react';

function IfeanyiComp(props) {
    console.log(props);

    const [count, setCount] = useState(10);

    // function myOnClickCount(e) {
    function myOnClick(e) {
        console.log("you clicked in IfeanyiComp");
        props.countFunc();
        // console.log("We just clicked count", count);
        // setCount(count + 1);
    }

    return (
        <div>
            <h1>Hello World from IfeanyiComp</h1>
            {/* <h1 onClick={myOnClickCount}>Hello World: count {count}</h1> */}
            <h1 onClick={myOnClick}>Hello World: count {count}</h1>
        </div>
    )
}
export default IfeanyiComp;