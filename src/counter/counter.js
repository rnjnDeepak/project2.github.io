

import React from "react";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const Websocket = (props) => {
  const [count, setCount] = useState([]);
  const [counter1,setCounter1] =useState(0);
  const [counter2,setCounter2] =useState(0);
  const [counter3,setCounter3] =useState(0);

  useEffect(() => {
    let ws = socketIOClient("http://localhost:3000/");
    console.log(ws);
    ws.onopen = () => {
      console.log("connection open");
    };
    ws.onmessage = (e) => {
      setCount((state) => state + e.data);
    };
  });
  return (
    <div className="App">
          <h1>Counter App2</h1>
          <div className='app-container'>
                <div>
                <h4>{counter1}</h4>
                <button onClick={()=>{setCounter1(counter1+1)}}>counter1</button>
                </div>

                <div>
                <h4>{counter2}</h4>
                <button onClick={()=>{setCounter2(counter2+1)}}>counter2</button>
                </div>

                <div>
                <h4>{counter3}</h4>
                <button onClick={()=>{setCounter3(counter3+1)}}>counter3</button>
                </div>
          </div>

      </div>
  );
};

export default Websocket;
