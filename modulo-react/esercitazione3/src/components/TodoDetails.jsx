import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * Componente che mostra i dettagli di un singolo to-do.
 */
const TodoDetails = () => {
  const { id } = useParams(); // Ottiene l'ID dall'URL
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
          throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) return <p>Caricamento dettagli to-do...</p>;
  if (error) return <p>Errore: {error.message}</p>;
  if (!todo) return <p>To-do non trovato.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dettagli To-Do</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <p><span className="font-semibold">ID:</span> {todo.id}</p>
        <p><span className="font-semibold">Titolo:</span> {todo.title}</p>
        <p><span className="font-semibold">Completato:</span> {todo.completed ? 'Sì' : 'No'}</p>
      </div>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Torna alla Home
      </Link>
    </div>
  );
};

export default TodoDetails;
