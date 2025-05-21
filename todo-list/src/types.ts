/**
 * Interfaccia che rappresenta un singolo elemento Todo
 */
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number; // proprietà opzionale per associare un utente
}

// Interfaccia User
export interface User {
  id: number;
  name: string;
  email?: string; // campo opzionale
}