import React from "react";
import "./styles.css";

import { IBurger } from "../../types/components";

const Burger = ({ opened }: IBurger) => {
  return (
    <div className="burger__container relative">
      <span
        className={`burger__elem burger__elem-1 absolute ${
          opened && "burger__elem-1-active"
        }`}
      />
      <span
        className={`burger__elem burger__elem-2 absolute ${
          opened && "burger__elem-2-active"
        }`}
      />
      <span
        className={`burger__elem burger__elem-3 absolute ${
          opened && "burger__elem-3-active"
        }`}
      />
    </div>
  );
};

export default Burger;
