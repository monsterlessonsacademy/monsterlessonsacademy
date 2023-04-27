import { useContext } from "react";
import AlertContext from "./alert.context";

const alertStyles = {
  padding: "16px",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: 400,
};

const severityStyles = {
  success: {
    color: "#0f5132",
    background: "#d1e7dd",
  },
  info: {
    color: "#055160",
    background: "cff4fc",
  },
  warning: {
    color: "#664d03",
    background: "fff3cd",
  },
  danger: {
    color: "#842029",
    background: "#f8d7da",
  },
};

const Alert = () => {
  const [alert] = useContext(AlertContext);
  console.log("alert", alert);

  if (!alert) {
    return null;
  }

  const fullStyles = {
    ...alertStyles,
    ...severityStyles[alert.type],
  };
  return <div style={fullStyles}>{alert.text}</div>;
};

export default Alert;
