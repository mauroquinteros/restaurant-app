import { useState, useEffect } from "react";

const URL = "https://api.mauroquinteros.site";

export const useFetch = (path: string, options = {}, url: string = URL) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}/${path}`, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, url, options]);

  return { data, loading, error };
};
