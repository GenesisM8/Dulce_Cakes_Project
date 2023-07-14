import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetCartItems } from '../../store/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(thunkGetCartItems());
  }, [dispatch]);

  if (!cartItems) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h1>Hello from your shopping cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.cake && (
              <>
                <img src={item.cake.imageUrl} alt={item.cake.name} className='cake-img'/>
                <p>{item.cake.name}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;



