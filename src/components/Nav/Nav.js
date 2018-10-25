import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
     
      <li id="cursco">Current Score: {props.count}</li>

      
    </ul>
  </nav>
);

export default Nav;