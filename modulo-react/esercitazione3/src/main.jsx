import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { Provider as ReduxProvider } from "react-redux"
import store from './store/index.js';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter> {/* Avvolgi App con BrowserRouter */}
            <App />
        </BrowserRouter>
    </ReduxProvider>
);
