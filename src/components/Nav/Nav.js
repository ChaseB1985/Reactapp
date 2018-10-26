import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
     
      <li id="cursco">Current Score: {props.count}</li>
      <li id="topsco">Top Score: {props.topScore}</li>
      
      
    </ul>
  </nav>
);

export default Nav;