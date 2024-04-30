import "./App.css";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseReducer from "./hooks/useReducer";
import UseRef from "./hooks/useRef";
import About from "./about";
import { useState, useRef } from "react";

function App() {
  const [show, setShow] = useState(false);
  const contentRefs = {
    useState: useRef(null),
    useEffect: useRef(null),
    useReducer: useRef(null),
    useRef: useRef(null),
  };

  const handleShow = () => {
    setShow(!show);
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
      <h2>will add more, Tea Break...</h2>
    </>
  );
}

export default App;
