import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

