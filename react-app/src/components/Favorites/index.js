import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkAddFav, thunkDeleteFav } from "../../store/session";
import { NavLink, useHistory } from "react-router-dom";

export default function Favorites() {
  const dispatch = useDispatch();
  let userInfo = useSelector((state) => state.session.user);
  let history = useHistory();

  if (!userInfo) {
    history.push("/");
  }

  const favoriteCakes = userInfo && userInfo.favorites;

  return (
    <div>
      <h1>Your Favorites</h1>
      {favoriteCakes && Object.keys(favoriteCakes).length > 0 ? (
        Object.keys(favoriteCakes).map((cakeId) => (
          <div key={cakeId}>
            <h3>{favoriteCakes[cakeId].name}</h3>
            <img
              src={favoriteCakes[cakeId].imageUrl}
              alt={favoriteCakes[cakeId].name}
            />
          </div>
        ))
      ) : (
        <p>You don't have any favorites yet.</p>
      )}
    </div>
  );
}


