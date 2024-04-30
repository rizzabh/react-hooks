import React, { useReducer, useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Initial state
const initialState = { count: 0 };

const UseReducer = () => {
  // Using useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const [code, setCode] = useState(false);
  const handleCode = () => {
    setCode(!code);
  };

  const codestring = `
  import React, { useReducer } from 'react';

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
  
  // Initial state
  const initialState = { count: 0 };
  
  const Counter = () => {
    // Using useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div>
        <h2>Counter: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    );
  };
  
  export default Counter;
  `;

  return (
    <div className="card">
      <p className="hookname">useReducer Example:</p>
      <div>
        <h2>Counter: {state.count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <p>But how does this hook different than useState?</p>
      <p className="subtext">
        What i believe is... useReducer lets you play with states based on
        "Actions" which we use in switch statements. <br /> and useState is used
        for single state management. Take a loot at the code to see the
        difference.
      </p>
      <button onClick={handleCode}>{code ? "Hide Code" : "View Code"}</button>
      {code && (
        <SyntaxHighlighter language="javascript" className="codesnippet">
          {codestring}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default UseReducer;
