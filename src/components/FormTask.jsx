import "../CSS/FormTask.css";
import icon from "../assets/img/cocodrilo.png";
import { toast } from "react-toastify";
import { TaskContext } from "../context/Context";
import { useContext } from "react";
import { useState } from "react";

function FormTask() {
  const [value, setValue] = useState("");
  const { AddTodos } = useContext(TaskContext);

  const notify = () => {
    toast.warning("No hay texto :c", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      notify();
      return;
    } else {
      AddTodos(value);
      setValue("");
    }
  };
  return (
    <form className="formTask" onSubmit={onSubmit}>
      <div className="formTask-top">
        <h1 className="formTask-title">CREA UNA TAREA</h1>
      </div>
      <input
        value={value}
        onChange={onChange}
        className="formTask-input"
        type="text"
        placeholder="ingresa un titulo"
      />
      <button type="submit" className="formTask-button" onClick={onSubmit}>
        Guardar
      </button>
      <img src={icon} alt="esto es una foto" />
    </form>
  );
}

export default FormTask;
