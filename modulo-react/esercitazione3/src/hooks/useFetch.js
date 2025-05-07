import { useState, useEffect } from "react";

/**
 * Custom hook per effettuare una fetch da un URL.
 * @param {string} url - L'URL da cui recuperare i dati.
 * @returns {{ data: any, loading: boolean, error: string|null }}
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);       // Dati ricevuti
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(null);     // Eventuale errore

  useEffect(() => {
    const controller = new AbortController(); // permette di cancellare la fetch se il componente viene smontato

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Errore nella fetch");
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
