export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    const rpta = {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
    console.log(rpta);
    return rpta;
  }

  if (action.type === "NO_VALUE") {
    const rpta = {
      ...state,
      isModalOpen: true,
      modalContent: "please enter value",
    };
    console.log(rpta);
    return rpta;
  }

  if (action.type === "CLOSE_MODAL") {
    const rpta = { ...state, isModalOpen: false };
    console.log(rpta);
    return rpta;
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    const rpta = { ...state, people: newPeople };
    console.log(rpta);
    return rpta;
  }

  throw new Error("no matching action type");
};
