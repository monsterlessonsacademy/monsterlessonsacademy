import React, { ChangeEventHandler, Fragment } from "react";
import "./input.css";

export interface InputProps {
  disabled: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ disabled, label, onChange }: InputProps) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input
        type="text"
        disabled={disabled}
        onChange={onChange}
        className="mla-input"
      />
    </Fragment>
  );
};
