import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleCake } from "../../store/cakes";
import AddCartItem from "../Cart/addItem";
import "./cakes.css"

const SingleCake = () => {
  const { cakeId } = useParams();
  const dispatch = useDispatch();
  const cake = useSelector((state) => state.cakes.selectedCake);

  useEffect(() => {
    dispatch(thunkGetSingleCake(cakeId));
  }, [dispatch, cakeId]);

  if (!cake) return null;

  return (
    <div className="main-single-container">
      
 <div 
 className="cake-info">
 
 <p>
  Savor the exquisite taste of "Dulce's Cake," a divine creation filled with fine ingredients like Fruits, Macarons, Chocolates, and Meringues. Meticulously crafted with love, each cake is a work of art that not only looks amazing but also tastes simply divine.
 </p>
 <p>
  Enjoy the perfect balance of flavors - a shortbread-almond tart with a creamy mascarpone frosting. 
 </p>
 <p>
 Personalize your cake with a chosen letter or number and your favorite color.
 </p>
 <p>
   Elevate your celebrations with "Dulce's Cake" - a true delight for the senses.
 </p>
 
 </div>

      <div className="img-container2">
        <img src={cake.imageUrl} alt="Cake" className="single-cake-img" />
      </div>
<div className="custom-container">
        <div>
          <AddCartItem cakeId={cake.id} cake={cake} />
        </div>
      </div>
     
    </div>
  );
};

export default SingleCake;
