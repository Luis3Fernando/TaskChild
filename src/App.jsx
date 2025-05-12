import { TaskContext } from "./context/Context";
import { useContext } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";

import ButtonItem from "./components/ButtonItem";
import Counter from "./components/Counter";
import Item from "./components/Item";
import List from "./components/List";
import Search from "./components/Search";
import FormTask from "./components/FormTask";
import ModalCard from "./components/ModalCard";
import Programmer from './components/Programmer'

function App() {
  const { todos, loading, error, openModal, totalTodos } =
    useContext(TaskContext);
  const [SearchValue, setSearchValue] = useState("");

  let searchTodos = [];
  if (!SearchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = SearchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <FormTask></FormTask>
          <ButtonItem></ButtonItem>
        </div>
        <div className="list">
          <Counter></Counter>
          <Search
            SearchValue={SearchValue}
            setSearchValue={setSearchValue}
          ></Search>
          {loading && (
            <div className="container-span-loading">
              <span className="span-loading">
                <em>Cargando tareas.... espera..</em>
              </span>
            </div>
          )}
          {error && (
            <div className="container-span-loading">
              <span className="span-loading">
                <em>error... lo siento paso algo</em>
              </span>
            </div>
          )}
          {!loading  && !totalTodos>0 && (
            <div className="container-span-loading">
              <span className="span-loading">
                <em>No hay tareas por hacer :)</em>
              </span>
            </div>
          )}
          <List>
            {searchTodos.map((todo) => (
              <Item
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              ></Item>
            ))}
          </List>
          {!!openModal && (
            <ModalCard>
              <Programmer></Programmer>
            </ModalCard>
          )}
          
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
