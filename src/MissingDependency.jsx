import { useEffect } from "react";

const Component = ({ value, onChange }) => {
  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, []);

  return <div>Component</div>;
};

export default Component;
