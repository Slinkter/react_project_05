import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    console.log(name);
    console.log(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    }
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <div className="form-control">
            <label htmlFor="name"> Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label> Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label> Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Add
          </button>
        </form>
        {people.map((person) => {
          const { id, name, email, age } = person;
          return (
            <div key={id} className="item">
              <h4> {name} </h4>
              <h4> {email} </h4>
              <h4> {age} </h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
