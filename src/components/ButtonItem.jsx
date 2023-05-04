import React from "react";
import { useContext } from "react";
import {TaskContext} from '../context/Context'
import "../CSS/buttonStyle.css";

function ButtonItem() {
  const {setOpenModal} = useContext(TaskContext);
  return (
    <button className="button" onMouseOver={() => setOpenModal(prevState => !prevState)} onMouseOut={() => setOpenModal(prevState => !prevState)}>
      +
    </button>
  );
}

export default ButtonItem;
