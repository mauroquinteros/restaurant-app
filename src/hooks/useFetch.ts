/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { config } from "../common/config";
export const useFetch = (
  path: string,
  queryParam: Record<string, any>,
  options = {}
) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryString = new URLSearchParams(queryParam).toString();
        const fullUrl = `${config.url}/${path}${
          queryString ? `?${queryString}` : ""
        }`;

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
  }, [path, options, queryParam]);

  return { data, loading, error };
};
