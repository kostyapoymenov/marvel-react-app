import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {

    setLoading(true);

    try {
      const responce = await fetch(url, {method, body, headers});

      if (!responce.ok) {
        throw new Error(`Ошибка запроса на сервер`);
      }

      const data = await responce.json();

      setLoading(false);
      return data;

    } catch(e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }

  }, [])

  const clearError = useCallback(() => setError(null), [])

  return {loading, request, error, clearError}
}