import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Navigation.css";
import userImg from "../../assets/user.png"
import Footer from "../Footer"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

    const loginButton = (e) => {
    e.preventDefault();
    history.push("/login");
    closeMenu();
  };

  const signupButton = (e) => {
    e.preventDefault();
    history.push("/signup");
    closeMenu();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu} className="profile-button">
       <img src={userImg} alt="user-icon" className="profile-icon"/>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="pink-border">
            <div>Hello, 
              <div>
                {user.firstName} {user.lastName}</div>
              </div>
              
            <div>
              <button onClick={handleLogout}>Log Out</button>
            </div>
            <div>
              <NavLink exact to="/favorites">
                <button>Favorites</button>
              </NavLink>
            </div>
             </div>
          </>
        ) : (
          <>
           <div className="user-buttons" >
              <button onClick={signupButton} >
                Sign Up
              </button>
              <button onClick={loginButton}>
                Log in
              </button>
            </div>

          </>
        )}
      </div>
      
    </>
   
  );
}

export default ProfileButton;
