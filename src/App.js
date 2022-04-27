import "./App.css";

import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("defaulr user");

  useEffect(() => {
    
    setTimeout (() => {
      fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((data) => {
        console.log(data);
        const { name } = data;
        setUser(name);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error.message);
      });
    },3000)


  });

  if (isLoading) {
    return (
      <div className="App">
        <h1> Loading .... </h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="App">
        <h1> Error .... </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> hola mundo </h1>

      <div className="container">
        <h1> {user}</h1>
      </div>
    </div>
  );
}

export default App;
