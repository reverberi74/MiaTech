/*Nota
I React Hook (come useFilteredTodos) non possono essere chiamati dentro useMemo, useCallback o funzioni normali.
Devono essere chiamati direttamente nel corpo del componente o dentro altri custom hook.
Siccome useFilteredTodos è un custom hook, non va usato dentro useMemo, ma il filtro stesso può essere spostato dentro useMemo.
In pratica, potremmo eliminare useFilteredTodos e spostare la logica direttamente dentro useMemo.
Altrimenti possiamo convertire useFilteredTodos in una funzuona normale filterTodos*/
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import { filterTodos } from "../utils/filterTodos";

/**
 * Componente che mostra una lista di to-do con ricerca ottimizzata e memorizzazione dei dati filtrati.
 */
const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");

    const inputRef = useRef(null); // riferimento all'input

    /*useEffect(() => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100); // piccola attesa per garantire che il DOM sia pronto
    }, []);*/
    
// fa sì che il focus venga applicato solo dopo che loading diventa false, cioè dopo che i dati sono stati caricati.
    useEffect(() => {
        if (!loading && inputRef.current) {
          inputRef.current.focus();
        }
      }, [loading]);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    // 1 - Soluzione non corretta
    // Memoizzazione della lista filtrata utilizzando useFilteredTodo dentro useMemo
    /*const filteredTodos = useMemo(() => {
      return useFilteredTodos(data, searchTerm);
    }, [data, searchTerm]);*/

    // 2- soluzione sostituendo la logica di useFilteredTodos
    // Filtraggio diretto con useMemo con la stessa logica di useFilteredTodo
    /*const filteredTodos = useMemo(() => {
      if (!data) return [];
      return data.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [data, searchTerm]);*/

    // 3 - Soluzione per mantenere useFilteredTodos convertita in una funzione filterTodos da usare con useMemo 
    // Usiamo useMemo con la funzione di utilità filterTodos
   const filteredTodos = useMemo(() => {
        return filterTodos(data, searchTerm);
    }, [data, searchTerm]);

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
