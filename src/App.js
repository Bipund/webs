import './App.css';
import React, { Component } from "react"
import {w3cwebsocket as W3CWebSocket} from "websocket"

export default class App extends Component {

componentDidMount(){
  let client = new W3CWebSocket("ws://127.0.0.1:8000")

  client.onopen=(data)=>{
    console.log("connected",data)
    client.send()
  }
  
}
 
  render(){
    return (
      <div className="App">
          <span>working</span>
      </div>
    );
  }
  
}

