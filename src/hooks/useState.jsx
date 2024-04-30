import React from "react";
import { useState } from "react";
const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <p className="hookname">useState</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default UseState;
