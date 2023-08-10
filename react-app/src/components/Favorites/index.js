import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkAddFav, thunkDeleteFav } from "../../store/session";
import { NavLink, useHistory } from "react-router-dom";
import "./favorites.css"


export default function Favorites() {
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.session.user);
  let history = useHistory();
  const cakes = useSelector((state) =>state.cakes.all_cakes );

  if (!userInfo) {
    history.push("/");
  }

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

  const favoriteCakes = userInfo && userInfo.favorites;

  return (
    <div className="favorites-container">

    
    <div className="all-cakes-container">
      <h1>Your Favorites</h1>
      <div className="main-cakes-container">
            {favoriteCakes && Object.keys(favoriteCakes).length > 0 ? (
        Object.keys(favoriteCakes).map((cakeId) => (
          <div key={cakeId} className="single-cake-home">
            <div className="cake-img-container"> 
               <i
                className={`${
                  isFavorite(cakeId)
                    ? "fa-solid fa-heart heart-icon favorite"
                    : "fa-regular fa-heart heart-icon not-favorite"
                }`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent the NavLink behavior
                  handleToggleFavorite(cakeId);
                }}
              ></i>
              <NavLink to={`/cakes/${cakeId}`} >
                 <img
              alt={favoriteCakes[cakeId].name}
              src={favoriteCakes[cakeId].imageUrl}
              className="cake-img"
            />
              </NavLink>
            
            <p>{favoriteCakes[cakeId].name}</p>
            </div>
           
          </div>
        ))
      ) : (
        <p className="no-favorites">Your favorites list is currently empty.</p>
      )}
      </div>
    </div>
</div>


  );
}


