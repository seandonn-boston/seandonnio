import React from "react";
import Patty from "./Patty/Patty";
import "./Burger.scss";

const Burger = () => (
  <div className="Burger">
    <Patty />
    <Patty reversed />
  </div>
);

export default Burger;
