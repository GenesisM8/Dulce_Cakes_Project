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

    return {"all_items": {item.id: item.to_dict() for item in cart_items}}


# @cart_routes.route('/new', methods=['POST'])
# @login_required
# def add_cart_item():
#     form = CustomizeCakeForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         size = form.size.data
#         color = form.color.data
#         gluten_free = form.glutenFree.data
#         flavor = form.flavor.data
#         cake_character = form.cakeCharacter.data
#         food_allergens = form.foodAllergens.data

#         cake_id = request.json.get('cakeId')

#         # Retrieve the Cake object based on the cakeId
#         cake = Cake.query.get(cake_id)

#         # Calculate the price based on the selected size
#         if size == "Small (8-10 servings)":
#             price = cake.smallPrice
#         elif size == "Medium (12-16 servings)":
#             price = cake.mediumPrice
#         elif size == "Large (18-25 servings)":
#             price = cake.largePrice
#         else:
#             return {'errors': 'Invalid size'}, 400

#         # Create a new cart item with the selected customization
#         cart_item = Cartitem(
#             userId=current_user.id,
#             cakeId=cake_id,
#             size=size,
#             color=color,
#             glutenFree=gluten_free,
#             flavor=flavor,
#             cakeCharacter=cake_character,
#             foodAllergens=food_allergens,
#             quantity=1,
#             price=price,
#             total=price
#         )

#         db.session.add(cart_item)
#         db.session.commit()

#         # Return a response indicating success
#         return {"new_cartItem": cart_item.to_dict()}

#     print(form.errors)  # Print the validation errors for debugging purposes
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
