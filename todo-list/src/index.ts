import { Todo } from "./types";

// Array dei todo
const todos: Todo[] = [];

// Variabile per generare un ID univoco
let nextId = 1;

// Funzione per aggiungere un nuovo Todo
let nextTodoId = 1;

/**
 * Aggiunge un nuovo Todo all'elenco.
 * @param title Titolo del nuovo Todo
 * @returns Il nuovo oggetto Todo creato
 */
function addTodo(title: string): Todo {
  const newTodo: Todo = {
    id: nextId++,
    title,
    completed: false,
  };

  todos.push(newTodo);
  return newTodo;
}

// Funzione per assegnare un utente a un todo
function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    todo.userId = userId;
    console.log(`Assegnato user ${userId} al todo "${todo.title}"`);
  } else {
    console.log(`Todo con id ${todoId} non trovato`);
  }
}

// Esempio d'uso
addTodo("Studiare TypeScript");
assignTodoToUser(1, 101);

// Test
console.log("Ciao, Studente! Benvenuto in TypeScript");
console.log("Lista Todo:", todos);