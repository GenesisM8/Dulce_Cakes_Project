from flask import Blueprint, request
from sqlalchemy import or_, and_
from flask_login import current_user, login_required
from app.models import Cake, db, User, Cartitem, Review
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages

review_routes=Blueprint("reviews", __name__)

#all Reviews
@review_routes.route('')
def get_all_reviews():
    reviews = Review.query.all()
    return {"cake_reviews":{review.id: review.to_dict() for review in reviews}}

#POST a new review
@review_routes.route("/new", methods=['POST'])
@login_required
def create_review():

    form=ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
  
    if form.validate_on_submit():
        new_review = Review(
            userId = current_user.id,
            rating = form.data['rating'],
            review= form.data['review'],
            imageUrl = form.data['imageUrl']
        )

        db.session.add(new_review)
        db.session.commit()
        
        return {"new_review": new_review.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#Delete Review
@review_routes.route("/<int:reviewId>", methods=['DELETE'])
@login_required
def delete_review(reviewId):
    review = Review.query.get(reviewId)
    if not review:
        return {'error': 'Review not found'}, 404
    if review.userId != current_user.id:
        return {'error': 'Unauthorized'}, 403

    db.session.delete(review)
    db.session.commit()
    return {'message': 'Review deleted successfully'}