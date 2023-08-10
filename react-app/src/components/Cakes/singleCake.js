import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetSingleCake } from "../../store/cakes";
import AddCartItem from "../Cart/addItem";
import { useHistory } from "react-router-dom";
import { thunkAddFav, thunkDeleteFav } from "../../store/session";
import "./cakes.css"

const SingleCake = () => {
  const { cakeId } = useParams();
  const dispatch = useDispatch();
  const cake = useSelector((state) => state.cakes.selectedCake);
    const history = useHistory();
  let userInfo = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkGetSingleCake(cakeId));
  }, [dispatch, cakeId]);

    const handleToggleFavorite = async () => {
    if (!userInfo) {
      history.push("/login"); // Redirect to login page if not logged in
      return;
    }

    const cakeIsFavorite = !!userInfo.favorites[cakeId];

    if (cakeIsFavorite) {
      // Remove cake from favorites
      await dispatch(thunkDeleteFav(cakeId));
    } else {
      // Add cake to favorites
      await dispatch(thunkAddFav(cakeId));
    }
  };

   const isFavorite = (cakeId) => {
    return userInfo && userInfo.favorites && userInfo.favorites[cakeId];
  };

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
  <div className="cake-img-container">
    <img src={cake.imageUrl} alt="Cake" className="single-cake-img" />
    <i
      className={`${
        isFavorite(cake.id)
          ? "fa-solid fa-heart heart-icon favorite"
          : "fa-regular fa-heart heart-icon not-favorite"
      }`}
      onClick={(e) => {
        e.preventDefault();
        handleToggleFavorite();
      }}
    ></i>
  </div>
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
