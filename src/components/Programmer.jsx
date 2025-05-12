import React from "react";
import foto from '../assets/img/perfil1.jpg'
import github from '../assets/icon/github (1).svg'
import instagram from '../assets/icon/instagram.png'
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
        <h1>Luis Fernando Ch R</h1>
        <p>Systems Engineering</p>
      </div>
      <div className="card-add">
        <a href="https://www.instagram.com/louis3f3/">
          <img src={instagram} alt="" />
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
