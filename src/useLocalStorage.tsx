import { useState } from "react";

export const useLocalStorage = <T>(key:string, initialValue:T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue:typeof setStoredValue = (value) => {
    try {
      if (typeof value === "function") {
          
        setStoredValue(value);
      }
      else setStoredValue(value);

      if (typeof window !== "undefined") {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue] as [T , typeof setValue];
};
