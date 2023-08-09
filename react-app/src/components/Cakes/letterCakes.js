import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllCakes } from "../../store/cakes";
import { thunkAddFav, thunkDeleteFav } from "../../store/session";
import { useHistory } from "react-router-dom";
import "./cakes.css"

const LetterCakes = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) =>state.cakes.all_cakes );
  const history = useHistory();
  let userInfo = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(thunkGetAllCakes());
  }, [dispatch]);

  const handleToggleFavorite = async (cakeId) => {
     if (!userInfo) {
      history.push("/login"); // Redirect to login page if not logged in
      return;
    }
    // Check if the cake is already in favorites
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

  const letterCakes = cakes.filter((cake) => cake.category === "letters");

  return (
   <div className="all-cakes-container">
      <p className="all-cakes-text">
        Introducing our Letters Collection. Each design can be uniquely customized to suit your preferences, from size and flavor to color. Explore our delightful range and find the perfect cake to make your moments truly unforgettable.
      </p>
      <div className="main-cakes-container">
        {letterCakes.map((cake) => (
          <div key={cake.id} className="single-cake-home">
            <div className="cake-img-container">
              <i
                className={`fa-solid fa-heart heart-icon ${
                  isFavorite(cake.id) ? "favorite" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent the NavLink behavior
                  handleToggleFavorite(cake.id);
                }}
              ></i>
              <NavLink to={`/cakes/${cake.id}`}>
                <img src={cake.imageUrl} alt="Cake" className="cake-img" />
              </NavLink>
            </div>
            <p>{cake.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterCakes;