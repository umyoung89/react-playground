import React from "react";

const Button = ({ onClick, buttonName }) => {
  return <button onClick={onClick}>{buttonName}</button>;
};

export default Button;
