import { Todo } from "./types";

//N.B. la chiamo UserModel altrimenti abbiamo un duplicato di entità con l'altro User del file types.ts e mi da errore
export class UserModel {
  id: number;
  name: string;
  email?: string;
  todos: Todo[] = []; 

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    if (email) {
      this.email = email;
    }
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    console.log(`Todo "${todo.title}" aggiunto all'utente ${this.name}`);
  }
}