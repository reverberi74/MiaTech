import React from 'react';
import ItemList from './ItemList';

/**
 * Componente che utilizza ItemList passando un array di esempio.
 */
export default function ItemListWrapper() {
  const artisti = ['Luigi Tenco', 'Sergio Endrigo', 'Lucio Battisti', 'Mina', 'Anna Oxa'];

  return (
    <div className="p-4 border rounded shadow w-64">
      <h2 className="text-lg font-semibold mb-3">Lista Artisti</h2>
      <ItemList items={artisti} />
    </div>
  );
}
