import React, { useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, selectAllTodos, selectTodosLoading, selectTodosError, toggleTodo, removeTodo } from '../store/slices/todoSlice';

/**
 * Componente che mostra una lista di to-do provenienti da Redux,
 * con possibilità di completare/non completare e rimuovere ciascun to-do.
 * Utilizza anche un campo di ricerca la cui query è gestita tramite l'URL.
 */
const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectAllTodos);
    const loading = useSelector(selectTodosLoading);
    const error = useSelector(selectTodosError);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    /**
     * Effetto collaterale per caricare i to-do al montaggio del componente.
     * Dispatcha l'azione fetchTodos solo se i to-do non sono già stati caricati.
     */
    useEffect(() => {
        if (todos.length === 0 && loading === 'idle') {
            dispatch(fetchTodos());
        }
    }, [dispatch, todos.length, loading]);

    /**
     * Gestisce il cambiamento nel campo di ricerca.
     * Aggiorna il parametro 'search' nell'URL.
     */
    const handleSearchChange = useCallback((e) => {
        const newSearchTerm = e.target.value;
        if (newSearchTerm) {
            setSearchParams({ search: newSearchTerm });
        } else {
            setSearchParams({});
        }
    }, [setSearchParams]);

    /**
     * Gestisce il click sul checkbox per cambiare lo stato di completamento di un to-do.
     * Dispatcha l'azione toggleTodo con l'ID del to-do.
     * @param {number} id - L'ID del to-do da modificare.
     */
    const handleToggleComplete = (id) => {
        dispatch(toggleTodo(id));
    };

    /**
     * Gestisce il click sul bottone di eliminazione per rimuovere un to-do.
     * Dispatcha l'azione removeTodo con l'ID del to-do da eliminare.
     * @param {number} id - L'ID del to-do da rimuovere.
     */
    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    /**
     * Filtra la lista dei to-do in base al termine di ricerca.
     */
    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Gestione del rendering in base allo stato di caricamento ed errore
    if (loading === 'pending') return <p>Caricamento in corso...</p>;
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
                    <li key={todo.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <Link to={`/todos/${todo.id}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                                <span className={todo.completed ? "line-through text-gray-500" : ""}>
                                    {todo.title}
                                </span>
                            </Link>
                        </div>
                        <button
                            onClick={() => handleRemoveTodo(todo.id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                        >
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;