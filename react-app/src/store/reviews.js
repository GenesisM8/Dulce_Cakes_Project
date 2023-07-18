//constants
const GET_REVIEWS = "reviews/cake/GET";
const POST_REVIEW = "review/cake/GET";
const DELETE_REVIEW = "/review/cake/DELETE";

//action creators
const getReviewsAction = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const createReviewAction = (review) => {
  return {
    type: POST_REVIEW,
    review,
  };
};

const deleteReviewAction = (id) => {
  return {
    type: DELETE_REVIEW,
    id,
  };
};

//thunks
export const getReviewsThunk = () => async (dispatch) => {
  const res = await fetch(`/api/reviews`);
  if (res.ok) {
    const reviewRes = await res.json();
    console.log(reviewRes); // Log the response to see what you are getting
    let reviews = reviewRes.cake_reviews;
    dispatch(getReviewsAction(reviews));
    return reviews;
  }
};


export const createReviewThunk = (newReview) => async (dispatch) => {
  const { rating, review, imageUrl } = newReview;

  const res = await fetch(`/api/reviews/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      review,
      imageUrl,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    dispatch(createReviewAction(data));
    // dispatch(getSingleRestaurantThunk(id))
  }
  return data;
};

export const deleteReviewThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (res.ok) {
    dispatch(deleteReviewAction(id));
  }

  return data;
};

const initialState = {
  user: {},
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      const reviewsArray = Object.values(action.reviews); // Convert the object to an array
      return {
        ...state,
        reviews: reviewsArray,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.review], // Add the new review to the existing reviews array
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id), // Remove the deleted review from the reviews array
      };
    default:
      return state;
  }
};



export default reviewsReducer;
