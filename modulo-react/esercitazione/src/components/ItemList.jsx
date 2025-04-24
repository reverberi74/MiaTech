import React from 'react';

/**
 * Componente che visualizza una lista di elementi passati tramite prop.
 * @param {Object} props
 * @param {string[]} props.items - Array di stringhe da visualizzare nella lista.
 */
export default function ItemList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  );
}
