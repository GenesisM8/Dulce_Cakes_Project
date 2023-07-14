from flask import Blueprint, request
from flask_login import current_user, login_required
from sqlalchemy import or_, and_
from app.models import db, Cake, Cartitem, User
from app.forms import CustomizeCakeForm
from .auth_routes import validation_errors_to_error_messages

cart_routes = Blueprint("cart", __name__)

@cart_routes.route('')
@login_required
def get_all_cart_items():
    user = current_user
    cart_items = Cartitem.query.filter(Cartitem.userId == user.id).all()


    # Eager load the cake details for each cart item
    cake_ids = [item.cakeId for item in cart_items]
    cakes = Cake.query.filter(Cake.id.in_(cake_ids)).all()
    cake_dict = {cake.id: cake.to_dict() for cake in cakes}

    # Add the cake details to each cart item
    cart_items_with_cake = []
    for item in cart_items:
        cart_item = item.to_dict()
        cart_item['cake'] = cake_dict.get(item.cakeId)
        cart_item['cakeCharacter'] = item.cakeCharacter
        cart_item['price'] = item.price
        cart_items_with_cake.append(cart_item)

    return {"all_items": cart_items_with_cake}

@cart_routes.route('/<int:itemId>', methods=['PUT'])
@login_required
def update_cart_item_quantity(itemId):
    user = current_user

    cart_item = Cartitem.query.get(itemId)
    if not cart_item or cart_item.userId != user.id:
        return {"error": "Cart item not found"}, 400

    data = request.get_json()
    quantity = data.get('quantity')

    if not quantity or type(quantity) is not int:
        return {"error": "Invalid quantity"}, 400

    cart_item.quantity = quantity
    db.session.commit()

    return {"updatedCartItem": cart_item.to_dict()}

@cart_routes.route('/<int:item_id>', methods=['DELETE'])
@login_required
def delete_cart_item(item_id):
    user = current_user

    cart_item = Cartitem.query.get(item_id)

    if not cart_item or cart_item.userId != user.id:
        return {"error": "Cart item not found"}, 400

    db.session.delete(cart_item)
    db.session.commit()

    return {"message": "Cart item deleted successfully"}

