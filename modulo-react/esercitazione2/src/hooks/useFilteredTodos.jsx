import { useMemo } from 'react';

/**
 * Hook personalizzato per filtrare i to-do.
 * @param {Array} todos - Lista completa dei to-do.
 * @param {string} searchTerm - Termine di ricerca.
 * @returns {Array} - Lista dei to-do filtrati.
 */
const useFilteredTodos = (todos, searchTerm) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return todos;

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);
};

export default useFilteredTodos;
