import { useState, useEffect } from "react";

const getOnline = () => navigator.onLine || true;

const useOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(getOnline);

  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);

  return onlineStatus;
};

export default useOnline;
