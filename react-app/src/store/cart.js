// const GET_CART_ITEMS = "cart/GET_CART_ITEMS";
// const ADD_CART_ITEM = "cart/ADD_CART_ITEM";
// const UPDATE_CART_ITEM_QUANTITY = "cart/UPDATE_CART_ITEM_QUANTITY";
// const GET_CART_ITEMS_SUCCESS = "cart/GET_CART_ITEMS_SUCCESS";
// const GET_CART_ITEMS_FAILURE = "cart/GET_CART_ITEMS_FAILURE";

// const getCartItems = (cartItems) => ({
//   type: GET_CART_ITEMS,
//   payload: { all_items: cartItems },
// });

// const addCartItem = (cartItem) => ({
//   type: ADD_CART_ITEM,
//   payload: { cartItem },
// });

// const updateCartItemQuantity = (itemId, quantity) => ({
//   type: UPDATE_CART_ITEM_QUANTITY,
//   payload: { itemId, quantity },
// });

// const getCartItemsSuccess = (cartItems) => ({
//   type: GET_CART_ITEMS_SUCCESS,
//   payload: cartItems,
// });

// const getCartItemsFailure = (error) => ({
//   type: GET_CART_ITEMS_FAILURE,
//   payload: error,
// });

// export const thunkGetCartItems = () => async (dispatch) => {
//   try {
//     const res = await fetch("/api/cart");
//     if (res.ok) {
//       const data = await res.json();
//       dispatch(getCartItemsSuccess(data.all_items));
//     } else {
//       throw new Error("Failed to fetch cart items");
//     }
//   } catch (error) {
//     dispatch(getCartItemsFailure(error.message));
//   }
// };

// export const thunkAddCartItem = (cakeId, data) => async (dispatch) => {
//   const response = await fetch(`/api/cakes/${cakeId}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (response.ok) {
//     const responseData = await response.json();
//     const { new_cartItem } = responseData;
//     const { price } = new_cartItem;

//     // Update the price in the cart item
//     new_cartItem.price = price;

//     dispatch(addCartItem(new_cartItem));
//   }
// };

// export const thunkUpdateCartItemQuantity = (itemId, quantity) => async (dispatch) => {
//   try {
//     const response = await fetch(`/api/cart/${itemId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ quantity }),
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       const { updatedCartItem } = responseData;
//       dispatch(updateCartItemQuantity(itemId, updatedCartItem.quantity));
//     } else {
//       throw new Error("Failed to update cart item quantity");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const initialState = {
//   cartItems: [],
//   cakes: {},
// };

// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: action.payload.all_items,
//       };
//     case ADD_CART_ITEM:
//       const { cartItem } = action.payload;
//       const { price } = cartItem; // Extract the price from the cart item

//       // Update the price in the cart item
//       cartItem.price = price;

//       return {
//         ...state,
//         cartItems: [...state.cartItems, cartItem],
//       };
//     case UPDATE_CART_ITEM_QUANTITY:
//       const { itemId, quantity } = action.payload;

//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.id === itemId ? { ...item, quantity } : item
//         ),
//       };
//     case GET_CART_ITEMS_SUCCESS:
//       return {
//         ...state,
//         cartItems: action.payload,
//         error: null,
//       };
//     case GET_CART_ITEMS_FAILURE:
//       return {
//         ...state,
//         cartItems: [],
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// }


const GET_CART_ITEMS = "cart/GET_CART_ITEMS";
const ADD_CART_ITEM = "cart/ADD_CART_ITEM";
const UPDATE_CART_ITEM_QUANTITY = "cart/UPDATE_CART_ITEM_QUANTITY";
const DELETE_CART_ITEM = "cart/DELETE_CART_ITEM";
const GET_CART_ITEMS_SUCCESS = "cart/GET_CART_ITEMS_SUCCESS";
const GET_CART_ITEMS_FAILURE = "cart/GET_CART_ITEMS_FAILURE";

const getCartItems = (cartItems) => ({
  type: GET_CART_ITEMS,
  payload: { all_items: cartItems },
});

const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM,
  payload: { cartItem },
});

const updateCartItemQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { itemId, quantity },
});

const deleteCartItem = (itemId) => ({
  type: DELETE_CART_ITEM,
  payload: { itemId },
});

const getCartItemsSuccess = (cartItems) => ({
  type: GET_CART_ITEMS_SUCCESS,
  payload: cartItems,
});

const getCartItemsFailure = (error) => ({
  type: GET_CART_ITEMS_FAILURE,
  payload: error,
});

export const thunkGetCartItems = () => async (dispatch) => {
  try {
    const res = await fetch("/api/cart");
    if (res.ok) {
      const data = await res.json();
      dispatch(getCartItemsSuccess(data.all_items));
    } else {
      throw new Error("Failed to fetch cart items");
    }
  } catch (error) {
    dispatch(getCartItemsFailure(error.message));
  }
};

export const thunkAddCartItem = (cakeId, data) => async (dispatch) => {
  const response = await fetch(`/api/cakes/${cakeId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const responseData = await response.json();
    const { new_cartItem } = responseData;
    const { price } = new_cartItem;

    // Update the price in the cart item
    new_cartItem.price = price;

    dispatch(addCartItem(new_cartItem));
  }
};

export const thunkUpdateCartItemQuantity = (itemId, quantity) => async (dispatch) => {
  try {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });

    if (response.ok) {
      const responseData = await response.json();
      const { updatedCartItem } = responseData;
      dispatch(updateCartItemQuantity(itemId, updatedCartItem.quantity));
    } else {
      throw new Error("Failed to update cart item quantity");
    }
  } catch (error) {
    console.error(error);
  }
};

export const thunkDeleteCartItem = (itemId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch(deleteCartItem(itemId));
    } else {
      throw new Error("Failed to delete cart item");
    }
  } catch (error) {
    console.error(error);
  }
};

const initialState = {
  cartItems: [],
  cakes: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload.all_items,
      };
    case ADD_CART_ITEM:
      const { cartItem } = action.payload;
      const { price } = cartItem; // Extract the price from the cart item

      // Update the price in the cart item
      cartItem.price = price;

      return {
        ...state,
        cartItems: [...state.cartItems, cartItem],
      };
    case UPDATE_CART_ITEM_QUANTITY:
      const { itemId: updatedItemId, quantity: updatedQuantity } = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === updatedItemId ? { ...item, quantity: updatedQuantity } : item
        ),
      };
    case DELETE_CART_ITEM:
      const { itemId: deletedItemId } = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== deletedItemId),
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };
    case GET_CART_ITEMS_FAILURE:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

