import React, { useState } from 'react';

/**
 * Componente che gestisce un semplice form di login con username e password
 * e manda i dati ad un alert.
 */
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="p-4 border rounded shadow w-64">
      <h2 className="text-lg font-semibold mb-3">Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
