import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card"
    value={props.id}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
       </ul>
    </div>
    <button onClick={() => props.handleClick(props.id)}>Choose Friend</button>
  </div>
);

export default FriendCard;
