import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updateToyLikes, deleteToy }) {

  const toyListItems = toys.map((toy) => (<ToyCard key={toy.id} toy={toy} updateToyLikes={updateToyLikes} deleteToy={deleteToy} />))

  return (
    <div id="toy-collection">{toyListItems}</div>
  );
}

export default ToyContainer;
