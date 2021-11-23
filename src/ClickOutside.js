import { useRef, useState } from "react";
import useClickOutside from "./hooks/useClickOutside";

const ClickOutside = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    setShowTooltip(false);
  });
  return (
    <div ref={clickRef}>
      <button onClick={() => setShowTooltip(!showTooltip)}>
        Toggle tooltip
      </button>
      {showTooltip && (
        <div
          style={{
            border: "2px dashed orangered",
            height: 100,
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Tooltip
        </div>
      )}
    </div>
  );
};

export default ClickOutside;
