import React from "react";
import Contatore from './components/Contatore';
import LoginForm from "./components/LoginForm";
import UncontrolledInput from "./components/UncontrolledInput";
import ItemListWrapper from "./components/ItemListWrapper";
import CardExample from "./components/CardExample";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Esercizi React</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <Contatore />
        <LoginForm />
        <UncontrolledInput />
        <ItemListWrapper />
        <CardExample />
      </div>
    </div>
  );
}

export default App

