import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './orders.css'

const Orders = () => {
  return (
    <div className="center-orders">
      <h2>Thank You for your oder</h2>

      <NavLink exact to="/cakes">
        Click here to continue shopping
      </NavLink>
    </div>
  );
};

export default Orders;
