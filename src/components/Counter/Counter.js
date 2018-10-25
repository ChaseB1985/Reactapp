import React from "react";


// By extending the React.Component class, Counter inherits functionality from it

  const Counter = props => (


      <div className="card text-center">
        
        <div>
          <h1>count={props.count}</h1>
          <button onClick={props.handleIncrement}>Increment</button>
        </div>
        
      </div>
    );
  

export default Counter;
