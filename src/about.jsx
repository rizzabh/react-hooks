import React from "react";

const about = () => {
  return (
    <>
      <h1 className="">
        <span className="headertext">React Hooks</span> <br /> That you're{" "}
        likely going to use
      </h1>
      <p className="midtext">
        Github:{" "}
        <a href="https://github.com/rizzabh/react-hooks">
          /rizzabh/react-hooks
        </a>
      </p>
      <p className="subtext">
        Made this project to implement my understanding of hooks lol.
      </p>
      <div className="memetext">
        <img
          src="https://preview.redd.it/iwtyo-when-i-found-out-its-willem-dafoe-in-this-meme-and-v0-rcxsrnxi73xa1.png?width=1920&format=png&auto=webp&s=52e4b5333dc76bd1cca5763b02a3d583b39ec5e0"
          alt="william-dafoe"
          className="meme"
        />
      </div>
    </>
  );
};

export default about;
