/**
 * Interfaccia che rappresenta un singolo elemento Todo
 */
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; // proprietà opzionale per associare un utente
    metadata?: string | object; // metadata di tipo string | object opzionale  
  
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