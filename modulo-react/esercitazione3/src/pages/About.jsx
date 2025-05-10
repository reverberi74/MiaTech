import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Reindirizza l'utente alla Home
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-semibold text-blue-600">About</h1>
        </div>
      </header>
      <main className="py-8">
        <div className="container mx-auto max-w-xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam dolores, delectus,
            illo minus molestiae quidem quo officiis quis magni, pariatur repudiandae aut deleniti
            maiores repellat quibusdam praesentium ea dolore.
          </p>
          <button
            onClick={handleGoHome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Torna alla Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;

