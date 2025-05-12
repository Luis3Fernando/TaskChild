import React from "react";
import { useContext } from "react";
import {TaskContext} from '../context/Context'
import "../CSS/buttonStyle.css";

function ButtonItem() {
  const {setOpenModal} = useContext(TaskContext);
  return (
    <button className="button" onClick={() => setOpenModal(prevState => !prevState)}>
      +
    </button>
  );
}

export default ButtonItem;
