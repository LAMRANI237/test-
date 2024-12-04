import React from "react";

const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded bg-primary text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
