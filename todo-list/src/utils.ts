import { Todo } from "./types";

/**
 * Funzione generica che filtra un array di Todo in base a una condizione specificata.
 * 
 * @param todos - Array di oggetti Todo
 * @param filterFn - Funzione di filtro che accetta un Todo e restituisce true se deve essere incluso
 * @returns Nuovo array contenente solo i Todo che soddisfano la condizione
 */
export function filterTodos<T extends Todo>(todos: T[], filterFn: (todo: T) => boolean): T[] {
  return todos.filter(filterFn);
}