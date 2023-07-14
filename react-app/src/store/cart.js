const GET_CART_ITEMS = "cart/GET_CART_ITEMS";
const ADD_CART_ITEM = "cart/ADD_CART_ITEM";
const GET_CART_ITEMS_SUCCESS = "cart/GET_CART_ITEMS_SUCCESS";
const GET_CART_ITEMS_FAILURE = "cart/GET_CART_ITEMS_FAILURE";

const getCartItems = (cartItems) => ({
  type: GET_CART_ITEMS,
  payload: cartItems,
});

const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM,
  payload: { cartItem },
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
    dispatch(addCartItem(new_cartItem));
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
        cartItems: Object.values(action.payload.all_items),
      };
    case ADD_CART_ITEM:
      const { cartItem } = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems, cartItem],
      };

    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: Object.values(action.payload),
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
