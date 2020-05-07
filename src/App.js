import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IfeanyiComp from './IfeanyiComp';

let index = 20;

function App() {
  const [count, setCount] = useState(10);
  //let count = 10;
  function myOnClickCount(e) {
  setCount(count + 1);
    console.log("We just clicked count", count);
  }
  function myOnClickIndex(e) {
    index++;
    console.log("We just clicked index", index);
  }
  return (
    <div className="App">
      <div>
        <h1 onClick = {myOnClickCount}>Hello World: count {count}</h1>
        <h1 onClick = {myOnClickIndex}>Hello World: index {index}</h1>
        <IfeanyiComp countx = {count} countFunc = {myOnClickCount}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
