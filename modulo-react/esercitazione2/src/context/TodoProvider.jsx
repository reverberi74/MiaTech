import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";
import useFetch from "../hooks/useFetch";

/**
 * Provider che fornisce lo stato globale dei ToDo.
 */
const TodoProvider = ({ children }) => {
  const { data: fetchedTodos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (fetchedTodos) {
      setTodos(fetchedTodos);
    }
  }, [fetchedTodos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
