import React from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [effect, setEffect] = useState(false);
  const handleEffect = () => {
    setEffect(!effect);
  };
  useEffect(() => {
    if (effect) {
      //refresh the page to see the effect again
      document.body.style.backgroundColor = "#4a0260";
    }
  }, [effect]);
  return (
    <div>
      <div className="card">
        <p className="hookname">useEffect Example:</p>
        <button onClick={handleEffect}>Click me to see the effect</button>
        <p className="subtext">
          Once you click the button the bg will change as a sideEffect <br />
          because inside the dependency array ive used the above button's state.
          <br />
          and wont ever change unless you{" "}
          <span
            className="midtext"
            onClick={() => {
              window.location.reload();
            }}
          >
            refresh
          </span>{" "}
          the page because the state gets reset
        </p>
      </div>
      <img src="./effectvslayouteffect.png" alt="" className="info" />
    </div>
  );
};

export default UseEffect;
