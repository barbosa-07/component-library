import React from "react";
import "./input.css";

const Input = ({
  label = "default",
  name = "default",
  type = "text",
  placeholder = "type here...",
  variant = "normal",
  inputBoxStyle = {},
}) => {
  return (
    <div className={`input-${variant} custom-input-wrapper`}>
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        <div className="icon"></div>
        <input
          style={{ ...inputBoxStyle }}
          placeholder={placeholder}
          id={label}
          name={name}
          type={type}
        />
        <div className="show"></div>
      </div>
      <div className="alerts"></div>
    </div>
  );
};

export default Input;
