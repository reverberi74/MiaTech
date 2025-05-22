import { TodoWithMetaData } from "./types";
import { Project, User, Todo } from "./types";

// Array dei todo
const todos: Todo[] = [];

// Variabile per generare un ID univoco
let nextId = 1;

// Funzione per aggiungere un nuovo Todo
let nextTodoId = 1;

// Tipi Union Metadata string | object (1° Esercizio dei 5 rimasti)
/**
 * Aggiunge un nuovo Todo all'elenco.
 * @param title - Titolo del nuovo Todo
 * @param metadata - Dati aggiuntivi opzionali (può essere una stringa o un oggetto)
 * @returns Il nuovo oggetto Todo creato
 */
function addTodo(title: string, metadata?: string | object): Todo {
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

// Utilizzare Array Readonly nel file type.ts (3° Esercizio dei 5 rimasti)

// Utilizzate tipi Utility: updateTodo (2° Esercizio dei 5 rimasti)
/**
 * Aggiorna parzialmente un Todo esistente.
 * @param id - ID del Todo da aggiornare
 * @param updates - Oggetto con una o più proprietà da aggiornare
 * @returns Il Todo aggiornato o undefined se non trovato
 */
function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return undefined;

  Object.assign(todo, updates);
  return todo;
}

// Utilizzare Tuple (4° Esercizio dei 5 rimasti)
/**
 * Restituisce un riepilogo del Todo come tupla.
 * @param todo Oggetto Todo
 * @returns Tupla contenente [titolo, stato completamento]
 */
function getTodoSummary(todo: Todo): [string, boolean] {
  return [todo.title, todo.completed];
}

// Finalizzare il Progetto (5° Esercizio dei 5 rimasti)
/**
 * Crea un oggetto Project.
 * @param name Nome del progetto
 * @param users Elenco utenti
 * @param todos Elenco todo
 * @returns Progetto completo
 */
function createProject(name: string, users: User[], todos: Todo[]): Project {
  return {
    name,
    users,
    todos,
  };
}

// ------------------------------
// TEST FUNZIONALITÀ
// ------------------------------

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
//--------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------Nuovi Esercizi-------------------------------------------------//
//----------------------------------------(1° Esercizio dei 5 rimasti)------------------------------------------//
// Test metadata con oggetto o stringa
addTodo("Scrivere documentazione", "Urgente");
addTodo("Aggiornare schema", { step: 3, note: "Controllare validità" });
console.log("Lista Todo aggiornata con metadata string ed object:", todos);
//----------------------------------------(2° Esercizio dei 5 rimasti)-------------------------------------------//
// Utilizzate tipi Utility: updateTodo
// Test funzione updateTodo che può aggiornare parzialmente le proprietà di un Todo che usa il tipo utility Partial
addTodo("Preparare la cena");
updateTodo(1, { completed: true }); // aggiorna solo `completed`
updateTodo(1, { title: "Preparare la cena e lavare i piatti" }); // aggiorna solo `title`
console.log("Lista Todo aggiornata con updateTodo:", todos);
//-----------------------------------------(3° Esercizio dei 5 rimasti)--------------------------------------------//
// Test readonly
const user1: User = {
  id: 1,
  name: "Mario",
  todos: [
    { id: 1, title: "Leggere un libro", completed: false },
  ]
};

// Non è possibile modificare l'array:
// user1.todos.push({ id: 2, title: "Nuovo todo", completed: false }); // Errore

// È possibile leggere i dati:
console.log(user1.todos[0].title); // Leggere un libro
//--------------------------------------(4° Esercizio dei 5 rimasti)--------------------------------------------------// 
// Test getTodoSummary
const mioTodo: Todo = {
  id: 1,
  title: "Rivedere gli appunti",
  completed: true,
};

const [titolo, stato] = getTodoSummary(mioTodo);
console.log("Titolo:", titolo); // Titolo: Rivedere gli appunti
console.log("Completato:", stato); // Completato: true
//------------------------------------(5° Esercizio dei 5 rimasti)-----------------------------------------------------//
// Test finale: creare un progetto
const utenti: User[] = [
  { id: 101, name: "Marco", todos: [] },
  { id: 102, name: "Lucia", todos: [] },
];
const progettoFinale = createProject("ToDo App TypeScript", utenti, todos);
console.log("Progetto creato:", JSON.stringify(progettoFinale, null, 2));
