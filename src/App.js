import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("hola click");

    if (name && email) {
      const newItem = { id: new Date().getTime().toString(), name, email };
      setList((list) => {
        return [...list, newItem];
      });

      setName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article className="container">
        <form className="form" onSubmit={handleClick}>
          <div className="form-control">
            <label htmlFor="name"> Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            add
          </button>
        </form>
        {list.map((item) => {
          const { id, name, email } = item;
          return (
            <div key={id} className="item">
              <h2> {name}</h2>
              <p> {email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default App;
