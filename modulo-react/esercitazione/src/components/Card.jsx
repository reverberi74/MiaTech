import React from 'react';

/**
 * Componente contenitore che usa props.children per visualizzare il contenuto interno.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenuto da mostrare all'interno della Card.
 */
export default function Card({ children }) {
  return (
    <div className="border rounded shadow p-4 bg-white w-64">
      {children}
    </div>
  );
}
