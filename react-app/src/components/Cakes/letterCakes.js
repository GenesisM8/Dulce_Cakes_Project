import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllCakes } from "../../store/cakes";
import "./cakes.css"

const LetterCakes = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) =>state.cakes.all_cakes );


  useEffect(() => {
    dispatch(thunkGetAllCakes());
  }, [dispatch]);

  const letterCakes = cakes.filter((cake) => cake.category === "letters");

  return (

    <div className="main-cakes-container">
      {letterCakes.map((cake) => (
        <div key={cake.id}>
          <NavLink to={`/cakes/${cake.id}`}>
            <img src={cake.imageUrl} alt="Cake" className="cake-img" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LetterCakes;