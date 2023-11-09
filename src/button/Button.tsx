import React, { MouseEventHandler } from "react";
import "./button.css";

export interface ButtonProps {
  disabled: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ disabled, text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="mla-button"
    >
      {text}
    </button>
  );
};
