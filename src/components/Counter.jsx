import "../CSS/counter.css";
import {TaskContext} from '../context/Context'
import { useContext } from "react";

function Counter() {
  const {totalTodos, completedTodos} = useContext(TaskContext);
  return (
    <>
      <h1 className="title">Tus Tareas :D<br /><span className="title-span">completadas solo {completedTodos} de {totalTodos}</span></h1>
    </>
  );
}

export default Counter;
 