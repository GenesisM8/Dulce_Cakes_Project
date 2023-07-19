import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './LoginForm.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = async (e) => {
    e.preventDefault()
    let email = "demo@aa.io"
    let password = "password"
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push("/")
    }
  }

  return (
    <>
    <div className="sign-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="sign-form">
        <div>
          {errors.map((error, idx) => (
            <div key={idx} className="signError">{error}</div>
          ))}
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
          <div className="demo-user">
          <button type="button" onClick={demoUser}>LOG IN AS DEMO USER</button>
        </div>
          <div className="sign-buttons">
            <button type="submit" className="button-left">LOG IN</button>
             <NavLink exact to="/signup">
              <button className="button-right">SIGN UP</button>
            </NavLink>
          </div>
        
       
      </form>
      </div>
    </>
  );
}

export default LoginFormPage;
