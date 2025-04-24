import React, { useState, useEffect } from 'react';

/**
 * Componente che mostra un contatore con incrementa, decrementa e reset.
 */
function Counter() {
  const [count, setCount] = useState(0);

  const incrementa = () =>{
    setCount(count + 1);
}

const decrementa = () => {
    if(count > 0){
        setCount(count - 1);
    }
}

const resetta = () => {
    setCount(0);
}

  // Aggiorna il titolo della pagina ogni volta che count cambia
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="p-4 border rounded shadow w-fit mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">Count {count}</h2>
      <div className="space-x-2">
        <button
          onClick={incrementa}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          +1
        </button>
        <button
          onClick={decrementa}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button
          onClick={resetta}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

/**
 * Componente input che aggiorna uno stato con il testo digitato.
 */
function TextInput() {
  const [text, setText] = useState('');

  return (
    <div className="p-4 border rounded shadow w-fit mx-auto my-4">
      <h2 className="text-lg font-semibold mb-1">Text Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Scrivi qualcosa..."
        className="border px-2 py-1 rounded w-full"
      />
      <p className="mt-2">Valore attuale: <strong>{text}</strong></p>
    </div>
  );
}

/**
 * Componente principale che raggruppa Counter e TextInput.
 */
export default function Contatore() {
  return (
    <div className="max-w-md mx-auto">
      <Counter />
      <TextInput />
    </div>
  );
}
