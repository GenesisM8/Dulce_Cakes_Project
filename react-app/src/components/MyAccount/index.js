import React from "react";
import { NavLink, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from 'react-redux';
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import Favorites from "../Favorites";



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
    <div className="main-account">
        <div className="main-account2">
          <h2>My Account</h2>   
        </div>
        <div className="main-account-body">
      <div>
            <p>
             Hello, {sessionUser.firstName} {sessionUser.lastName} 
            </p>
            <p>
             {sessionUser.email}   
            </p>
        </div>
        <h4> Your Favorites</h4>
        <Favorites></Favorites>
      <div className="sign-buttons">
        <button onClick={handleLogout} className="button-left">Log Out</button>
      </div>
        </div>
    </div>
  );
};

export default MyAccount;