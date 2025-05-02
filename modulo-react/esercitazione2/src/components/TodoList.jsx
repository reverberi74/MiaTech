import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import { filterTodos } from "../utils/filterTodos";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, error } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, searchTerm);
  }, [todos, searchTerm]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Lista To-Do</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="text-black placeholder-gray-400 border border-gray-300 px-3 py-2 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      <ul className="list-disc list-inside space-y-1">
        {filteredTodos.slice(0, 100).map((todo) => (
          <li key={todo.id}>
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
