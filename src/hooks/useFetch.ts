/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const URL = "https://api.mauroquinteros.site";

export const useFetch = (
  path: string,
  queryParam: Record<string, any>,
  options = {},
  url: string = URL
) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryString = new URLSearchParams(queryParam).toString();
        const fullUrl = `${url}/${path}${queryString ? `?${queryString}` : ""}`;

        const response = await fetch(fullUrl, options);
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
  }, [path, url, options, queryParam]);

  return { data, loading, error };
};
