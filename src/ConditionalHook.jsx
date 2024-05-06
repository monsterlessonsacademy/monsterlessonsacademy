import { useCallback, useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return <div>{/* ... */}</div>;
  }
  const openToggle = useCallback(() => setIsOpen(true), []);
  return <button onClick={openToggle}>{/* ... */}</button>;
};

export default Toggle;
