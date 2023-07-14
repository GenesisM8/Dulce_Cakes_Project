import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems } from "../../store/cart";
import { thunkGetSingleCake } from "../../store/cakes";

const Cart = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allCakes = useSelector((state) => state.cakes.all_cakes);
//   console.log(allCakes, '⭐️') // empty array
  const userCartItems = cartItems.filter((item) => item.userId === userId);

  useEffect(() => {
    dispatch(thunkGetCartItems());
  }, [dispatch]);

  useEffect(() => {
    // Fetch the cake details for each cart item
    userCartItems.forEach((item) => {
      dispatch(thunkGetSingleCake(item.cakeId));
    });
  }, [dispatch, cartItems]);

  if (!cartItems) return null;

  return (
    <div>
      <h1>Hello from your shopping cart</h1>
      <ul>
        {userCartItems.map((item) => {
          const cake = allCakes.find((cake) => cake.id === item.cakeId);
          return (
            <li key={item.id}>
              {item.cakeId} - {cake && cake.imageUrl}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;



