const GET_CAKES = 'cakes/GET_CAKES';
const GET_SINGLE_CAKE = 'cakes/GET_SINGLE_CAKE';

const getCakes = (cakes) => ({
  type: GET_CAKES,
  payload: cakes
});

const getSingleCake = (cake) => ({
  type: GET_SINGLE_CAKE,
  payload: cake
});

export const thunkGetAllCakes = () => async (dispatch) => {
  const res = await fetch('/api/cakes');
  const data = await res.json();
  if (res.ok) {
    dispatch(getCakes(data));
    return data;
  }
};

export const thunkGetSingleCake = (cakeId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/cakes/${cakeId}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(getSingleCake(data.cake_info));
    }
  } catch (error) {
    // console.log(error);
  }
};

const initialState = {
  all_cakes: [],
  selectedCake: null
};

export default function cakesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAKES:
      const allCakes = Object.values(action.payload.all_cakes);
      return {
        ...state,
        all_cakes: allCakes
      };
    case GET_SINGLE_CAKE:
      return {
        ...state,
        selectedCake: action.payload
      };
    default:
      return state;
  }
}










