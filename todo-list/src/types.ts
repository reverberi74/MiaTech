/**
 * Interfaccia che rappresenta un singolo elemento Todo
 */
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; // proprietà opzionale per associare un utente
    metadata?: any[]; // Nuova proprietà opzionale con Metadata
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
}