import "./App.css";

import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const btn_activeError = ()=> {   
    setIsError(!isError);

  }
  console.log(isError);
  return (
    <div className="App">
      <h1> hola mundo </h1>
      <div className="container">
        <h1> {text || 'default title'}</h1>
        <button className="btn" onClick={()=> { btn_activeError()}}> click me </button>
        {isError && (<h1>Error activado </h1>)}
        {isError ?  <p>'el error se ha activado'</p>  : <p>'sin errores '</p> }
      </div>
    </div>
  );
}

export default App;
