import React from "react";
import foto from '../assets/img/image-line.jpeg'
import github from '../assets/icon/github (1).svg'
import facebook from '../assets/icon/facebook (1).svg'
import heart from '../assets/icon/heart-solid.svg'
import "../CSS/programmer.css";

function Programmer() {
  return (
    <div className="card-container">
      <div className="card-background"></div>
      <div className="card-img">
        <img src={foto} alt="esto es la imagen" />
      </div>
      <div className="card-title">
        <h1>Ana Elizabeth</h1>
        <p>Systems Engineering</p>
      </div>
      <div className="card-add">
        <a href="https://www.facebook.com/louisf.chumbesramos3">
          <img src={facebook} alt="" />
        </a>
        <a href="https://github.com/Luis3Fernando">
          <img src={github} alt="" />
        </a>
        <a href="https://www.youtube.com/watch?v=VmgBcYFumO8">
          <img src={heart} alt="" />
        </a>
      </div>
      <div className="card-button">
        <button>About Me</button>
      </div>
    </div>
  );
}

export default Programmer;
