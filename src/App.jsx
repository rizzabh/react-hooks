import "./App.css";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseReducer from "./hooks/useReducer";
import UseRef from "./hooks/useRef";
import About from "./about";
import { useState, useRef } from "react";
import UseMemo from "./hooks/useMemo";

function App() {
  const [show, setShow] = useState(false);
  const contentRefs = {
    useState: useRef(null),
    useEffect: useRef(null),
    useReducer: useRef(null),
    useRef: useRef(null),
    useMemo: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
      </div>

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
      <h2>will add more, Tea Break...</h2>
    </>
  );
}

export default App;
