// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getReviewsThunk } from "../../store/reviews";
// import OpenModalButton from "../OpenModalButton";
// import DeleteReviewModal from "./deleteReview";
// import './review.css'




// const Reviews = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.session.user);
//   let reviews = useSelector((state) => state.review.reviews);

//   useEffect(() => {
//     dispatch(getReviewsThunk()); // Fetch reviews when the component mounts
//   }, [dispatch]);

  
//   //  const deleteReviewButton = (user, review) => {
//   //   if (user === null || user === undefined) return false;
//   //   if (user.id === review.userId) return true;
//   //   return false;
//   // };

//   return (
//     <div>
//         {reviews.length > 0 ? (
//             <ul>
//               <div className="review-container">
//                 {reviews.map((review) => (
//                   <div key={review.id}>
//                     <div className="single-review-container">
//                     <h4>{review.UserName}</h4>
//                      <p>{review.rating}</p>
//                       <p>{review.review}</p>
//                       <img src={review.imageUrl} alt="img" className="review-img"/>

//                       {/* {deleteReviewButton(user, review) ? (
//                         <OpenModalButton
//                           buttonText="Delete"
//                           modalComponent={
//                             <DeleteReviewModal
//                               review={review}
//                             />
//                           }
//                         />
//                       ) : null} */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </ul>
//           ) : (
//             <p></p>
//           )}
//     </div>
//   );
// };

// export default Reviews;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsThunk } from "../../store/reviews";
import OpenModalButton from "../OpenModalButton";
import DeleteReviewModal from "./deleteReview";
import './review.css'


const Reviews = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  let reviews = useSelector((state) => state.review.reviews);

  useEffect(() => {
    dispatch(getReviewsThunk()); // Fetch reviews when the component mounts
  }, [dispatch]);

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star filled"></i>);
    }

    return stars;
  };

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          <div className="review-container">
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="single-review-container">
                  <h4>{review.UserName}</h4>
                  <div className="star-container">
                    {renderStarRating(review.rating)}
                  </div>
                  <p>{review.review}</p>
                  <img src={review.imageUrl} alt="img" className="review-img" />

                  {/* {deleteReviewButton(user, review) ? (
                    <OpenModalButton
                      buttonText="Delete"
                      modalComponent={
                        <DeleteReviewModal
                          review={review}
                        />
                      }
                    />
                  ) : null} */}
                </div>
              </div>
            ))}
          </div>
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Reviews;

