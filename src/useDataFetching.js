import { useState, useEffect } from "react";

export default (dataSource) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const json = await data.json();

        if (json) {
          setIsLoading(false);
          setData(json);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return {
    error,
    isLoading,
    data,
  };
};
