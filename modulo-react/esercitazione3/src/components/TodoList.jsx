import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

/**
 * Componente che mostra una lista di to-do con campo di ricerca, con il termine di ricerca gestito tramite URL.
 */
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || ''; // Ottiene il termine di ricerca dalla URL

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Funzione per gestire i cambiamenti nella ricerca
  const handleSearchChange = useCallback((e) => {
    const newSearchTerm = e.target.value;
    if (newSearchTerm) {
      setSearchParams({ search: newSearchTerm }); // Imposta il parametro nella URL
    } else {
      setSearchParams({}); // Rimuove il parametro dalla URL
    }
  }, [setSearchParams]);

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error.message}</p>;

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
            <Link to={`/todos/${todo.id}`} className="text-blue-600 hover:text-blue-800 transition-colors">
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
