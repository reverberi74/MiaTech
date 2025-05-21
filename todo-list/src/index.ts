import { Todo } from "./types";
import { TodoWithMetaData } from "./types";

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
function addTodo(title: string, metadata?: any[]): Todo {
  const newTodo: Todo = {
    id: nextId++,
    title,
    completed: false,
    metadata, // opzionale
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

// Funzione che restituisce tutti i todo associati a un determinato userId
function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}

// Gestione degli errori con Never
function error(message: string): never {
  throw new Error(message);
}

// Gestione dei Tipo Dinamici con Unknown
function parseInput(input: unknown): string {
  if (typeof input === "string") {
    return input;
  }

  if (typeof input === "number") {
    return input.toString();
  }

  return error("Tipo di input non valido");
}


// test per Ottenere tutti i Todos associati a un utente
addTodo("Studiare TypeScript");
assignTodoToUser(1, 101);
addTodo("Completare il progetto");
assignTodoToUser(2, 101);
addTodo("Ripassare gli esercizi");
assignTodoToUser(3, 102);
addTodo("Scrivere la relazione");
assignTodoToUser(4, 101);
// test per ritornare uno specifico Todos appartenente ad uno specifico utente
const user101Todos = getUserTodos(101);
console.log("Todo di user 101:", user101Todos);
console.log("Lista Todo:", todos);

// test Gestione dei Tipo Dinamici con Unknown
console.log(parseInput("Ciao"));   // "Ciao"
console.log(parseInput(123));      // "123"
//console.log(parseInput(true));     // Errore: Tipo di input non valido (interruzione del programma)

//test Metadata
addTodo("Ripassare gli esercizi", [{ note: "Usare il tipo any" }, 42, true]);
assignTodoToUser(5, 103);
console.log("Lista Todo aggiornata:", JSON.stringify(todos, null, 2));

// test Interfaccia TodoWithMetaData che estende Todo
const specialTodo: TodoWithMetaData = {
  id: 100,
  title: "Esercizio con extends",
  completed: false,
  metadata: ["dato extra", { note: "Importante" }],
};

console.log("Todo con metadata obbligatorio:", specialTodo);