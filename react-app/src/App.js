// this file sets up the structure of the React application, manages authentication, 
// handles routing, and renders different components based on the current route.

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllCakes from "./components/Cakes/cakes";
import LetterCakes from "./components/Cakes/letterCakes";
import NumberCakes from "./components/Cakes/numbersCakes";
import ShapeCakes from "./components/Cakes/shapeCakes";
import HolidayCakes from "./components/Cakes/holidayCakes";
import SingleCake from "./components/Cakes/singleCake";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Reviews from "./components/Reviews";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import MyAccount from "./components/MyAccount";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
          <HomePage/>
        </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/cakes">
            <AllCakes/>
          </Route>
          <Route exact path="/cakes/letters">
            <LetterCakes/>
          </Route>
        <Route exact path="/cakes/numbers">
          <NumberCakes/>
        </Route>
        <Route exact path="/cakes/shapes">
          <ShapeCakes/>
        </Route>
        <Route exact path="/cakes/holiday">
          <HolidayCakes/>
        </Route>
        <Route exact path="/cakes/:cakeId">
          <SingleCake/>
        </Route>
         <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
         <Route exact path="/orders">
          <Orders/>
        </Route>
        <Route exact path="/account">
          <MyAccount/>
        </Route>
        </Switch>
      )}
      <Footer/>
    </>
  );
}

export default App;
