import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
import { reducer } from "./reducer";
import "./App.css";
/*  */
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
/*  */
function App() {
  //
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  //
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  //
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Add</button>
          </div>
        </form>

        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4> {name}</h4>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_ITEM", payload: id });
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
