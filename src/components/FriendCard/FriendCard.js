import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card"
    value={props.id}
   // onClick={()=> props.handleIncrement(props.id)}
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
    <button onClick={props.handleIncrement}>Increment</button>
  </div>
);

export default FriendCard;
