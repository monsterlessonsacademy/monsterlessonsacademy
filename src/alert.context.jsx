import { createContext, useEffect, useRef, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const timerRef = useRef(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
