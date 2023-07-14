import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleCake } from "../../store/cakes";
import AddCartItem from "../Cart/addItem";


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
      <div>
      <h2>{cake.name}</h2>
      <img src={cake.imageUrl} alt="Cake" className="single-cake-img" />
      </div>
      <div className="custom-container">
        <AddCartItem cakeId={cake.id} cake={cake} />
      </div>
    </div>
  );
};

export default SingleCake;

