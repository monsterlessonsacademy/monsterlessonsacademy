import { useState, useEffect } from "react";

export default (dataSource) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [dataSource]);

  return { isLoading, data, error };
};
