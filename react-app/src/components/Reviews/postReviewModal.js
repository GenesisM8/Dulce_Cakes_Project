import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import StarsRatingInput from "./StarsRating";
import { createReviewThunk, getReviewsThunk } from "../../store/reviews";
import "./stars.css";

function ReviewModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [errorRes, setErrorRes] = useState({});

  useEffect(() => {
    const err = {};
    if (review.length < 10 && review.length > 1)
      err.description = "Review must be between 10 and 250 characters";
    if (review.length === 0) err.description = "";
    if (review.length > 250) err.description = "Sorry your review is too long";
    if (rating < 1) err.rating = "";
    setErrors(err);
  }, [review, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const newReview = {
      rating,
      review,
      imageUrl,
    };
    const addReviewRes = await dispatch(createReviewThunk(newReview));
    if (addReviewRes.message) {
      await setErrorRes(addReviewRes);
    }
    await closeModal();
    await dispatch(getReviewsThunk());
  };

  const onChange = (rating) => {
    setRating(parseInt(rating));
  };

  return (
    <>
      <div className="reviewContainer">
        <form className="reviewForm" onSubmit={handleSubmit}>
          {/* <h3>Tell us how we did</h3> */}
          {Boolean(Object.values(errors).length) && (
            <div>
              {Object.values(errors).map((errorMsg, index) => (
                <p key={index} className="signError">
                  {errorMsg}
                </p>
              ))}
            </div>
          )}
          <textarea
            cols="40"
            rows="7"
            className="notes"
            placeholder="Leave your review here..."
            value={review}
            name="review"
            maxLength={250}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <div className="starsContainer">
            <StarsRatingInput
              disabled={false}
              onChange={onChange}
              rating={rating}
            />
            <p>Stars</p>
          </div>
          <div className="post-img">
            <p>Image (optional)</p>
            <input
              type="text"
              className="img-input"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="submitReview"
            disabled={Boolean(Object.values(errors).length)}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewModal;
