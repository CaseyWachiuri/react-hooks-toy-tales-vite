import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  function updateToyLikes(id, newLikes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: newLikes })
    })
      .then(r => r.json())
      .then(updatedToy => {
        setToys(toys.map(toy =>
          toy.id === id ? updatedToy : toy))
      })
  }

  function deleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(() => (setToys(toys.filter(toy => toy.id !== id)))
      )
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} updateToyLikes={updateToyLikes} deleteToy={deleteToy} />
    </>
  );
}

export default App;
