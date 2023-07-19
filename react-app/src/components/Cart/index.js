import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkGetCartItems, thunkUpdateCartItemQuantity, thunkDeleteCartItem } from '../../store/cart';


const colorDisplayNames = {
  white: 'White',
  pink: 'Light Pink',
  hotPink: 'Hot Pink',
  plum: 'Lavender',
  blueviolet: 'Violet',
  lightskyblue: 'Light Blue',
  dodgerBlue: 'Blue',
  turquoise: 'Turquoise',
  lightgreen: 'Green',
  gold: 'Yellow',
  coral: 'Coral',
  orangeRed: 'Red',
  burlywood: 'Neutral',
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
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

  history.push('/orders');
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty</p>
        <NavLink exact to="/cakes">
          Click here to continue shopping
        </NavLink>
      </div>
    );
  }

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.cake && (
            <>
              <div className="single-cart-item-container">
                <div>
                  <img src={item.cake.imageUrl} alt={item.cake.name} className="cake-img-cart" />
                </div>
                <div>
                  <p>{item.cake.name}</p>
                  {item.cakeCharacter && <p>Character: {item.cakeCharacter.toUpperCase()}</p>}
                  <p>Size: {item.size}</p>
                  {item.cake.category !== 'holiday' && ( // Condition to hide color for holiday items
                    <>
                      {item.color2 ? (
                        <p>
                          Color: {colorDisplayNames[item.color]}, and {colorDisplayNames[item.color2]}
                        </p>
                      ) : (
                        <p>
                          Color: {colorDisplayNames[item.color]} {item.otherColor}
                        </p>
                      )}
                    </>
                  )}
                  <p>Cream Flavor: {item.flavor}</p>
                  
                  {item.glutenFree && <p>Base option: {item.glutenFree}</p>}
                </div>
                <div>
                  <p>Price: ${item.price}.00</p>
                </div>
                <div>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleQuantityDecrease(item.id)}>-</button>
                  <button onClick={() => handleQuantityIncrease(item.id)}>+</button>
                </div>
                <div>
                  <p>Total: ${item.price * item.quantity}.00</p>
                </div>
                <div>
                  <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Amount: ${totalAmount}.00</p>
      </div>
      <div>
        <button onClick={handleCompleteOrder} >Complete Order</button> 
      </div>
    </div>
  );
};

export default Cart








