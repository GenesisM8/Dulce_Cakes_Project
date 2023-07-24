import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllCakes } from "../../store/cakes";
import "./cakes.css"

const HolidayCakes = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) =>state.cakes.all_cakes );


  useEffect(() => {
    dispatch(thunkGetAllCakes());
  }, [dispatch]);

  const holidayCakes = cakes.filter((cake) => cake.category === "holiday");

  return (

     <div className="all-cakes-container">
      <p className="all-cakes-text">
        Introducing our Holiday Collection. Each design can be uniquely customized to suit your preferences, from size and flavor to color. Explore our delightful range and find the perfect cake to make your moments truly unforgettable. 
      </p>
    <div className="main-cakes-container">
      {holidayCakes.map((cake) => (
        <div key={cake.id} className="single-cake-home">
          <NavLink to={`/cakes/${cake.id}`}>
            <img src={cake.imageUrl} alt="Cake" className="cake-img" />
            <p>{cake.name}</p>
          </NavLink>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HolidayCakes;