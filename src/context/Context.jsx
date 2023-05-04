import React from "react";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

function useLocal(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageTodos);
        }
        setTodos(parseItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveTodos = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setTodos(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return { todos, saveTodos, loading, error };
}

export function TaskContextProvider(props) {
  const [openModal, setOpenModal] = useState(false);
  const DefaultTodos = [
    { text: "hjsv", completed: true },
    { text: "Tuigais", completed: false },
    { text: "Luivg<afuvsa", completed: false },
    { text: "LALALALAA", completed: false },
  ];
  const {
    todos: todos,
    saveTodos: setTodos,
    loading,
    error,
  } = useLocal("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const CompleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const AddTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    setTodos(newTodos);
  };

  return (
    <>
      <TaskContext.Provider
        value={{
          todos,
          completedTodos,
          totalTodos,
          CompleteTodos,
          DeleteTodo,
          loading,
          error,
          openModal,
          setOpenModal,
          AddTodos,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
