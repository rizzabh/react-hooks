import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const UseRef = () => {
  const [code, setCode] = useState("");
  const hideCode = () => {
    setCode("");
  };
  const handletimerCode = () => {
    setCode("timer");
  };
  const handleDOMCode = () => {
    setCode("DOM");
  };
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10); // Update every 10 milliseconds for milliseconds display
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    const milliseconds = String(time % 100).padStart(2, "0");
    const seconds = String(Math.floor((time / 100) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, "0");
    const hours = String(Math.floor((time / 360000) % 24)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const timercodestring = `
  import React, { useRef, useState } from "react";

const UseRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10); // Update every 10 milliseconds for milliseconds display
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    const milliseconds = String(time % 100).padStart(2, "0");
    const seconds = String(Math.floor((time / 100) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, "0");
    const hours = String(Math.floor((time / 360000) % 24)).padStart(2, "0");
    return "";
  };

  return (
    <div>
      <div className="card">
        <p className="hookname">useRef Example:</p>
        <p className="subtext">Stopwatch using useRef</p>
        <h2>Timer: {formatTime(timer)}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button
          onClick={() => {
            setTimer(0);
            stopTimer();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseRef;
`;

  const DOMcodestring = `import React, { useRef } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
`;

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <div className="card">
        <p className="hookname">useRef</p>
        <p className="">Stopwatch using useRef</p>
        <h2>Timer: {formatTime(timer)}</h2>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button
            onClick={() => {
              setTimer(0);
              stopTimer();
            }}
          >
            Reset
          </button>
        </div>
        <p className="subtext">
          Major difference in useState and useRef is that useRef is mutable, to
          make changes in a state using useState we use a second variable to
          make the change in Ui so the declaration in useState of a single
          variable is like const[state,setState] = useState(); but in{" "}
          <span className="midtext">
            useRef: const intervalRef = useRef( );
          </span>
        </p>
        {code === "timer" ? (
          <button onClick={hideCode}>Hide Code</button>
        ) : (
          <button onClick={handletimerCode}>View Code</button>
        )}
        {code === "timer" && (
          <SyntaxHighlighter language="javascript" className="codesnippet">
            {timercodestring}
          </SyntaxHighlighter>
        )}
        <p className="texter">
          Let us understand a simpler and DOM related use case of useRef with
          input focus.
        </p>
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={focusInput}>Focus Input</button>
        </div>
        <p className="subtext">
          The default action of input focus triggers when its clicked,We can do
          it on will by using useRef and passing the input as DOM and focusing
          it.
        </p>

        {code === "DOM" ? (
          <button onClick={hideCode}>Hide Code</button>
        ) : (
          <button onClick={handleDOMCode}>View Code</button>
        )}

        {code === "DOM" && (
          <SyntaxHighlighter language="javascript" className="codesnippet">
            {DOMcodestring}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default UseRef;
