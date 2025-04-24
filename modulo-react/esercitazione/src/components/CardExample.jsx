import React from 'react';
import Card from './Card';

/**
 * Componente che utilizza Card e mostra contenuti testuali e una thumbnail con link.
 */
export default function CardExample() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">Card</h2>
      <p className="text-gray-700 mb-3">
        Questo è il contenuto interno della card, passato come children.
      </p>
      <a
        href="https://picsum.photos"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src="https://picsum.photos/300/200"
          alt="Thumbnail esempio"
          className="rounded shadow hover:opacity-90 transition duration-200"
        />
      </a>
    </Card>
  );
}

