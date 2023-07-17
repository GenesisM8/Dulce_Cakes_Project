import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { thunkGetCartItems, thunkUpdateCartItemQuantity, thunkDeleteCartItem } from '../../store/cart';

// Create a mapping of color values to display names
const colorDisplayNames = {
  white: 'White',
  pink: 'Light Pink',
  hotPink: 'Hot Pink',
  plum: 'Lavender',
  blueviolet: 'Violet',
  lightskyblue: 'Light Blue',
  dodgerBlue: 'Blue',
  turquoise: 'Turquoise',
  palegreen: 'Green',
  gold: 'Yellow',
  coral: 'Coral',
  orangeRed: 'Red',
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

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
    <div className='cart-container'>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.cake && (
            <>
              <div className='single-cart-item-container'>
                <div>
                  <img src={item.cake.imageUrl} alt={item.cake.name} className="cake-img-cart" />
                </div>
                <div>
                  <p>{item.cake.name}</p>
                  <p>Size: {item.size}</p>
                  {item.color2 ? (
                    <p>
                      Color: {colorDisplayNames[item.color]}, and {colorDisplayNames[item.color2]}
                    </p>
                  ) : (
                    <p>
                      Color: {colorDisplayNames[item.color]} {item.otherColor}
                    </p>
                  )}
                  <p>Flavor: {item.flavor}</p>
                  {item.cakeCharacter && <p>Cake Character: {item.cakeCharacter}</p>}
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
    </div>
  );
};

export default Cart;







