import { useState, useEffect, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./hooks/useState";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import UseEffect from "./hooks/useEffect";
import UseReducer from "./hooks/useReducer";

function App() {
  return (
    <>
      <h1 className="hookname">Hooks That you're likely going to use</h1>
      <p className="midtext">
        Github:{" "}
        <a href="https://github.com/rizzabh/react-hooks">
          /rizzabh/react-hooks
        </a>
      </p>
      <p className="subtext">
        Made this project to implement my understanding of hooks lol.
      </p>
      <img
        src="https://preview.redd.it/iwtyo-when-i-found-out-its-willem-dafoe-in-this-meme-and-v0-rcxsrnxi73xa1.png?width=1920&format=png&auto=webp&s=52e4b5333dc76bd1cca5763b02a3d583b39ec5e0"
        alt="william-dafoe"
        className="meme"
      />
      <UseState />
      <UseEffect />
      <UseReducer />
      <img src="./effectvslayouteffect.png" alt="" className="info" />

      <h2>will add more, Tea Break...</h2>
    </>
  );
}

export default App;
