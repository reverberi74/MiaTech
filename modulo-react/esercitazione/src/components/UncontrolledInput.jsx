import React, { useRef } from 'react';

/**
 * Componente che utilizza un input non controllato con useRef per accedere al valore.
 */
export default function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      alert(`Valore dell'input: ${inputRef.current.value}`);
    }
  };

  return (
    <div className="p-4 border rounded shadow w-64">
      <h2 className="text-lg font-semibold mb-3">Uncontrolled Input</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Scrivi qualcosa..."
        className="border px-2 py-1 rounded w-full mb-3"
      />
      <button
        onClick={handleClick}
        className="bg-purple-500 text-white px-3 py-1 rounded w-full"
      >
        Mostra Valore
      </button>
    </div>
  );
}
