import React from "react";

function ToyCard({ toy, updateToyLikes, deleteToy }) {

  function handleLikeClick() {
    const newLikes = toy.likes + 1
    updateToyLikes(toy.id, newLikes)
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button
        className="like-btn"
        onClick={handleLikeClick}
      >Like {"<3"}</button>
      <button
        className="del-btn"
        onClick={() => deleteToy(toy.id)}
      >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
