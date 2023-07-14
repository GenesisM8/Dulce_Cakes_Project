import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllCakes } from "../../store/cakes";
import "./cakes.css"

const AllCakes = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) =>state.cakes.all_cakes );


  useEffect(() => {
    dispatch(thunkGetAllCakes());
  }, [dispatch]);

  return (

    <div className="main-cakes-container">
      {cakes.map((cake) => (
        <div key={cake.id}>
          <NavLink to={`/cakes/${cake.id}`}>
            <img src={cake.imageUrl} alt="Cake" className="cake-img" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default AllCakes;
