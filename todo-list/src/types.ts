/**
 * Interfaccia che rappresenta un singolo elemento Todo
 */
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; // proprietà opzionale per associare un utente
    metadata?: string | object; // metadata di tipo string | object opzionale 
    status: TodoStatus; // include una proprietà status di tipo TodoStatus 
  
}

// Interfaccia TodoWithMetaData che estende Todo
export interface TodoWithMetaData extends Todo {
  metadata: any[];
}

// Interfaccia User
export interface User {
    id: number;
    name: string;
    email?: string; // campo opzionale
    readonly todos: ReadonlyArray<Todo>; // Utilizzare Array Readonly
}

/**
 * Interfaccia che rappresenta un progetto composto da utenti e todo.
 */
export interface Project {
  name: string;
  users: User[];
  todos: Todo[];
}

// Enum per rappresentare lo stato del Todo
export enum TodoStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}


/**
 * Tipo mappato che rende tutte le proprietà del tipo Todo opzionali.
 */
export type PartialTodo = {
  [K in keyof Todo]?: Todo[K];
};

/**
 * Tipo che mappa un id numerico a un oggetto Todo
 */
export type TodoRecord = Record<number, Todo>;