import React from "react";
import { NavLink, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from 'react-redux';
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";



const MyAccount = () => {
const sessionUser = useSelector(state => state.session.user);
const dispatch = useDispatch();
const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  return (
    <div className="center-cart">
      <h2>My Account</h2>
        <div>
            {sessionUser.firstName} {sessionUser.lastName}<br></br>
            {sessionUser.email}
        </div>
      <NavLink exact to="/favorites">
        <p>Favorites</p>
      </NavLink>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default MyAccount;