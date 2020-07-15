import React from "react";
import Patty from "./Patty/Patty";
import "./Burger.scss";

const Burger = () => (
  <div className="Burger">
    {/*Should be clickable*/}
    <Patty position="top" />
    <Patty position="bottom" />
  </div>
);

export default Burger;
