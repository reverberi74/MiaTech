import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Azione asincrona per recuperare i to-do dal server.
 * Utilizza l'endpoint "https://jsonplaceholder.typicode.com/todos".
 */
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
);

/**
 * Stato iniziale per lo slice dei to-do.
 * @typedef {object} TodoState
 * @property {Array<object>} todos - Array contenente gli oggetti to-do.
 * @property {'idle' | 'pending' | 'succeeded' | 'failed'} loading - Stato del caricamento dei to-do.
 * @property {string | null} error - Messaggio di errore in caso di fallimento del caricamento.
 */
const initialState = {
    todos: [],
    loading: 'idle',
    error: null
};

/**
 * Crea uno slice Redux per gestire lo stato dei to-do.
 */
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        /**
         * Cambia lo stato di completamento di un to-do.
         * @param {TodoState} state - Lo stato corrente dello slice.
         * @param {object} action - L'azione dispatchata.
         * @param {number} action.payload - L'ID del to-do da modificare.
         */
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        /**
         * Rimuove un to-do dall'array.
         * @param {TodoState} state - Lo stato corrente dello slice.
         * @param {object} action - L'azione dispatchata.
         * @param {number} action.payload - L'ID del to-do da rimuovere.
         */
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
        // Abbiamo rimosso 'addTodo' e 'editTodoText' per semplificare
    },
    /**
     * Gestisce i risultati dell'azione asincrona fetchTodos.
     */
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    }
});

// Esportiamo le azioni create dallo slice
export const { toggleTodo, removeTodo } = todoSlice.actions;

// Esportiamo i selettori per accedere allo stato
/**
 * Selettore per ottenere tutti i to-do dallo stato.
 * @param {object} state - Lo stato globale di Redux.
 * @returns {Array<object>} - L'array di to-do.
 */
export const selectAllTodos = (state) => state.todos.todos;

/**
 * Selettore per ottenere lo stato di caricamento dei to-do.
 * @param {object} state - Lo stato globale di Redux.
 * @returns {'idle' | 'pending' | 'succeeded' | 'failed'} - Lo stato di caricamento.
 */
export const selectTodosLoading = (state) => state.todos.loading;

/**
 * Selettore per ottenere l'eventuale errore nel caricamento dei to-do.
 * @param {object} state - Lo stato globale di Redux.
 * @returns {string | null} - Il messaggio di errore.
 */
export const selectTodosError = (state) => state.todos.error;

// Esportiamo il reducer dello slice per poterlo aggiungere allo store
export default todoSlice.reducer;