import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
import { reducer } from "./reducer";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const List = ({ people, removePerson }) => {
    return (
      <div>
        {people.map((person) => {
          return (
            <SinglePerson
              key={person.id}
              {...person}
              removePerson={removePerson}
            />
          );
        })}
      </div>
    );
  };

  const SinglePerson = ({ id, name, removePerson }) => {
    return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <section>
        <h3> prop drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </React.Fragment>
  );
}

export default App;
