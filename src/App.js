import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
import { reducer } from "./reducer";
import "./App.css";

function App() {
  const defaultState = { people: [], isModalOpen: false, modalContent: "" };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <div className="container">
        {state.isModalOpen && (
          <Modal modalContent={state.modalContent} closeModal={closeModal} />
        )}

        <form className="form" onClick={handleClick}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" type="submit">
              Add
            </button>
          </div>
        </form>

        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4> {name}</h4>
              <button
                className=""
                onClick={() => {
                  dispatch({ type: "REMOVE_ITEM", payload: person.id });
                }}
              >
                remove{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
