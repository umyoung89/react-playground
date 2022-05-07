import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getRandom = async () => {
      const result = await axios.get("https://www.boredapi.com/api/activity");
      console.log(result);
      return result;
    };
    getRandom();
  }, []);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(newCount);
  };
  return (
    <div>
      <button onClick={handleClick}>Test</button>
      <Button onClick={handleClick} buttonName="miami" />
      <Button onClick={handleClick} buttonName="lebron" />
      {count}
    </div>
  );
};

export default Cart;
