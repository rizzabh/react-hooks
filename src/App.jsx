import "./App.css";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseReducer from "./hooks/useReducer";
import UseRef from "./hooks/useRef";
import About from "./about";
import { useState, useRef, useCallback } from "react";
import UseMemo from "./hooks/useMemo";
import UseCallback from "./hooks/useCallback";

function App() {
  const [show, setShow] = useState(false);
  const contentRefs = {
    useState: useRef(null),
    useEffect: useRef(null),
    useReducer: useRef(null),
    useRef: useRef(null),
    useMemo: useRef(null),
    useCallback: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Hooks -" : "Show Hooks +"}
      </button>
      {show && (
        <div className="card1">
          <button onClick={() => scrollToSection(contentRefs.useState)}>
            useState
          </button>
          <button onClick={() => scrollToSection(contentRefs.useEffect)}>
            useEffect
          </button>
          <button onClick={() => scrollToSection(contentRefs.useReducer)}>
            useReducer
          </button>
          <button onClick={() => scrollToSection(contentRefs.useRef)}>
            useRef
          </button>
          <button onClick={() => scrollToSection(contentRefs.useMemo)}>
            useMemo
          </button>
          <button onClick={() => scrollToSection(contentRefs.useCallback)}>
            useCallback
          </button>
          <div
            className="close"
            onClick={() => {
              setShow(false);
            }}
          >
            x
          </div>
        </div>
      )}

      <About />
      <div ref={contentRefs.useState}>
        <UseState />
      </div>
      <div ref={contentRefs.useEffect}>
        <UseEffect />
      </div>
      <div ref={contentRefs.useReducer}>
        <UseReducer />
      </div>
      <div ref={contentRefs.useRef}>
        <UseRef />
      </div>
      <div ref={contentRefs.useMemo}>
        <UseMemo />
      </div>
      <div ref={contentRefs.useCallback}>
        <UseCallback />
      </div>

      <h2>will add more, Tea Break...</h2>
    </>
  );
}

export default App;
