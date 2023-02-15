import React, { useState } from "react"
import "./App.css"
import { Button } from "semantic-ui-react";



function App() {


  const [count, setCount] = useState(0)
let color;

if(count<5){
  color = 'green';
}else if(count<10){
  color = 'blue';
}else{
  color= 'red';
}

 
  return (
    <div className="App">
      <div className="kit">
        <u><h1 style={{color: color}} >Counter app using states</h1></u>
        <h2 style={{color: color}}>Current value of count is: [ {count} ]</h2><br />
        <div className="btnclass">
          <button class="ui button" onClick={() => setCount(0)}>Reset counter</button><br />
          <button class="ui button" onClick={() => (count >=10 ? "" : setCount(count + 1))} >Increment</button>
          <button class="ui button" onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrement</button>
        </div><br />
        <h3>Done by:- Dhruva Arora . 12002597</h3>
      </div>
    </div>
  );
}
export default App;


