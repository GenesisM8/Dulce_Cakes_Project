const GET_CART_ITEMS = 'cart/GET_CART_ITEMS';
const ADD_CART_ITEM = 'cart/ADD_CART_ITEM';


const getCartItems = (cartItems) => ({
  type: GET_CART_ITEMS,
  payload: cartItems,
});

const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM,
  payload: { cartItem },
});



export const thunkGetCartItems = () => async (dispatch) => {
  try {
    const res = await fetch('/api/cart');
    if (res.ok) {
      const data = await res.json();
      dispatch(getCartItems(data));
    }
  } catch (error) {
    // Handle any error that occurs during the request
    console.error('Error fetching cart items:', error);
  }
};


export const thunkAddCartItem = (cakeId, data) => async (dispatch) => {
  const response = await fetch(`/api/cakes/${cakeId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
        cartItems: {
          ...state.cartItems,
          [cartItem.id]: cartItem,
        },
      };

    default:
      return state;
  }
}



