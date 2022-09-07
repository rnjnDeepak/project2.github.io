import React, {Component} from 'react';
import './App.css';
import Counter from './counter/counter'

import socketIOClient from 'socket.io-client';
const socket = socketIOClient("http://localhost:3000/");
// console.log(socket);

const App = ()=>{
  return(
    <Counter />
  )
}
export default App;
