import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  const Item = () => {
    return <h1> Esto es un mensaje </h1>;
  };

  return (
    <div className="container">
      <h1> Show/Hide </h1>
      <button className="btn" onClick={() => setShow(!show)}>
        click me
      </button>
      {show || <Item />}
   
    </div>
  );
}

export default App;
