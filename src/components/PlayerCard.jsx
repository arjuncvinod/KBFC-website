import React from "react";
function PlayerCard(props) {
  return (
    <div className="player-card">
      <div className="img-container">
        <img src={`/images/players/${props.image}`} alt="" />
      </div>
      <div className="details">
        <p>{props.position}</p>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default PlayerCard;
