import React, { useState } from "react";
import Patty from "./Patty/Patty";
import "./Burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`Burger ${isOpen ? "open" : ""}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Patty {...{ isOpen }} />
      <Patty {...{ isOpen }} reversed />
    </div>
  );
};

export default Burger;
