/**
 * Filtra una lista di to-do in base a un termine di ricerca.
 *
 * @param {Array} todos - Lista dei to-do.
 * @param {string} searchTerm - Termine di ricerca.
 * @returns {Array} Lista dei to-do filtrati.
 */
export function filterTodos(todos, searchTerm) {
    if (!todos || !Array.isArray(todos)) return [];
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  