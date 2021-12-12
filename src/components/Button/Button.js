import React from "react";
import "./button.css";

export const Button = ({
  className = "",
  size = "",
  type = "",
  onClick,
  children = "dummy",
  style = {},
}) => {
  const sizeClass = `btn-${size}`;
  return (
    <button
      className={`btn btn-${type} ${sizeClass} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
