import { useCallback, useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openToggle = useCallback(() => setIsOpen(true), []);

  if (isOpen) {
    return <div>{/* ... */}</div>;
  }
  return <button onClick={openToggle}>{/* ... */}</button>;
};

export default Toggle;
