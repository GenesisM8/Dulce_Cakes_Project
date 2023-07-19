import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (email.length === 0) errors.email = "";
    if (firstName.length === 0) errors.firstName = "";
    if (lastName.length === 0) errors.lastName = "";
    if (password.length === 0 || password.length < 6) errors.password = "";
    if (confirmPassword.length === 0 || confirmPassword.length < 6)
      errors.confirmPassword = "";
    if (password.length < 6 && password.length > 0)
      errors.password = "Password needs to be at least 6 characters.";

    setErrors(errors);
  }, [email, firstName, lastName, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  if (sessionUser) return <Redirect to="/" />;
  return (
    <>
      <div className="sign-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} className="sign-form">
          <div>
            {errors.map((error, idx) => (
              <div key={idx} className="signError">{error}</div>
            ))}
          </div>
          {errors.firstName && <p className="signError">{errors.firstName}</p>}
          {errors.lastName && <p className="signError">{errors.lastName}</p>}
          {errors.email && <p className="signError">{errors.email}</p>}
          {errors.password && <p className="signError">{errors.password}</p>}
          {errors.confirmPassword && (
            <p className="signError">{errors.confirmPassword}</p>
          )}
          <div>
            <label className="form-small-container">
              FIRST NAME
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="sign-input"
              />
            </label>
          </div>
          <div>
            <label className="form-small-container">
              LAST NAME
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                pattern="[A-Za-z]+"
                title="Please enter a valid last name"
                className="sign-input"
              />
            </label>
          </div>
          <div>
            <label className="form-small-container">
              EMAIL
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="sign-input"
              />
            </label>
          </div>

          <div>
            <label className="form-small-container">
              PASSWORD
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="sign-input"
              />
            </label>
          </div>
          <div>
            <label className="form-small-container">
              CONFIRM PASSWORD
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="sign-input"
              />
            </label>
          </div>
          <div className="sign-buttons">
            <button type="submit" className="button-left">SIGN UP</button>
            <NavLink exact to="/login">
              <button className="button-right">LOG IN</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupFormPage;
