import React, { useState, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos";

/**
 * Componente che mostra una lista di to-do con campo di ricerca ottimizzato.
 */
const TodoList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Funzione ottimizzata per evitare la ricreazione a ogni render
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredTodos = useFilteredTodos(data, searchTerm);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Lista To-Do</h2>

      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border px-3 py-2 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
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
