import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  thunkGetCartItems,
  thunkUpdateCartItemQuantity,
  thunkDeleteCartItem,
} from "../../store/cart";
import "./cart.css";


const colorDisplayNames = {
  white: "White",
  pink: "Light Pink",
  hotPink: "Hot Pink",
  plum: "Lavender",
  blueviolet: "Violet",
  lightskyblue: "Light Blue",
  dodgerBlue: "Blue",
  turquoise: "Turquoise",
  lightgreen: "Green",
  gold: "Yellow",
  coral: "Coral",
  orangeRed: "Red",
  burlywood: "Neutral",
};


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  useEffect(() => {
    dispatch(thunkGetCartItems());
  }, [dispatch]);

  const handleQuantityIncrease = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    const updatedQuantity = cartItem.quantity + 1;
    dispatch(thunkUpdateCartItemQuantity(itemId, updatedQuantity));
  };

  const handleQuantityDecrease = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (cartItem.quantity > 1) {
      const updatedQuantity = cartItem.quantity - 1;
      dispatch(thunkUpdateCartItemQuantity(itemId, updatedQuantity));
    }
  };

  const handleDeleteItem = (itemId) => {
    dispatch(thunkDeleteCartItem(itemId));
  };

  const handleCompleteOrder = () => {
    cartItems.forEach((item) => {
      dispatch(thunkDeleteCartItem(item.id));
    });

    history.push("/orders");
  };

  if (!cartItems || cartItems.length === 0 || !sessionUser) {
    return (
      <div className="center-cart">
        
        <h2>Your Cart</h2>
        <p>Your cart is currently empty</p>
        <NavLink exact to="/cakes">
          <p className="under-line">Click here to continue shopping</p>
        </NavLink>
        
      </div>
    );
  }

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-lebels">
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
      </div>
      <div className="iner-container-cart">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="single-cart-item-container" >
            {item.cake && (
              <> 
                  <div className="cart-left" >
                    <div >
                      <NavLink exact to ={`/cakes/${item.cakeId}`}>
                       <img
                      src={item.cake.imageUrl}
                      alt={item.cake.name}
                      className="cake-img-cart"
                    /> 
                      </NavLink>
                    
                  </div>
                  <div className="details">
                    {item.cakeCharacter && (
                      <p className="cake-name">{item.cake.name} ({item.cakeCharacter.toUpperCase()})</p>
                    )}
                    {!item.cakeCharacter && (<p className="cake-name">{item.cake.name} </p>)}
                      <p>
                        {item.size} / {item.flavor} / {item.glutenFree} Base.
                      </p>
                

                    {item.cake.category !== "holiday" && ( // Condition to hide color for holiday items
                      <>
                        {item.color && (
                          <>
                            {item.color2 ? (
                              <p>
                                Color: {colorDisplayNames[item.color]}, and{" "}
                                {colorDisplayNames[item.color2]}.
                              </p>
                            ) : (
                              <p>Color: {colorDisplayNames[item.color]}.</p>
                            )}
                          </>
                        )}
                        {item.otherColor && (
                          <p>Other Color: {item.otherColor}</p>
                        )}
                      </>
                    )}
                    <p>
                      
                    </p>
                    </div>
                  </div>

  <div className="numbers">
                  <div className="quantity-container">
                    <p>${item.price}.00</p>
                  </div>
                  <div className="quantity-container">
                    <div className="quantity">
        
                      <button onClick={() => handleQuantityDecrease(item.id)} className="menos">
                        -
                      </button>
                      <p className="numero">{item.quantity}</p>
                      <button onClick={() => handleQuantityIncrease(item.id)}>
                        +
                      </button>
                    </div>
                    <div className="remove">
                      <button onClick={() => handleDeleteItem(item.id)}>
                        REMOVE
                      </button>
                    </div>
                  </div>
                  <div className="quantity-container">
                    <p>${item.price * item.quantity}.00</p>
                  </div>
                </div>      
              </>
            )}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total</h2>
        <p>${totalAmount}.00</p>
        <div>
          <button onClick={handleCompleteOrder}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
