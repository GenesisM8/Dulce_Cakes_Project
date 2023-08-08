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

  return (
    <div>
      <h1>Your Favorites Here</h1>
      {Object.keys(userInfo.favorites).map((cakeId) => (
        <div key={cakeId}>
          <h3>{userInfo.favorites[cakeId].name}</h3>
          <img src={userInfo.favorites[cakeId].imageUrl} alt={userInfo.favorites[cakeId].name} />
        </div>
      ))}
    </div>
  );
}

