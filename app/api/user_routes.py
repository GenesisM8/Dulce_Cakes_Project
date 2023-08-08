from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db, Cake

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/favorites/<int:cake_id>', methods = ['PUT'])
@login_required
def get_favorites(cake_id):
    """
     Returns all favorites by user id
    """

    user = User.query.get(current_user.id)
    cake = Cake.query.get(cake_id)
    cake.cake_favorites.append(user)
    db.session.commit()

    return {'user': user.to_dict()}

@user_routes.route('/favorites/<int:cake_id>', methods=['DELETE'])
@login_required
def delete_fav(cake_id):
    """
    Delete favorite by fav id
    """
    user = User.query.get(current_user.id)
    cake = Cake.query.get(cake_id)
    cake.cake_favorites.remove(user)

    db.session.commit()
    return {'user': user.to_dict()}

@user_routes.route('/favorites', methods=['GET'])
@login_required
def get_fav():
    user = User.query.get(current_user.id)
    favorite_cakes = user.user_favorites  # Access the user's favorite cakes through the relationship
    return {"favorite_cakes": {favorite.id: favorite.to_dict() for favorite in favorite_cakes}}
