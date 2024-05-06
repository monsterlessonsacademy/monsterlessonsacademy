import { useEffect } from "react";

const Component = ({ value, onChange }) => {
  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [value, onChange]);

  return <div>Component</div>;
};

export default Component;
