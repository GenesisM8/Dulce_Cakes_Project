import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './orders.css'

const Orders = () => {
  return (
    <div className="center-cart">
      <h2>Thank You for your oder</h2>

      <NavLink exact to="/cakes">
        <p className="under-line">Click here to continue shopping
          </p>
      </NavLink>
    </div>
  );
};

export default Orders;
