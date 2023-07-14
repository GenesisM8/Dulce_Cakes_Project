from flask import Blueprint, request
from sqlalchemy import or_, and_
from flask_login import current_user, login_required
from app.models import Cake, db, User, Cartitem
from app.forms import CustomizeCakeForm
from .auth_routes import validation_errors_to_error_messages
cake_routes=Blueprint("cakes", __name__)

#all cakes
@cake_routes.route('')
def get_all_cakes():
    cakes = Cake.query.all()
    res = {'all_cakes':{}}
    for cake in cakes:
        cake=cake.to_dict()
        id = cake['id']
        res["all_cakes"][id] = cake
    return res


#all letter cakes
@cake_routes.route('/letters')
def get_letter_cakes():

    letter_cakes = Cake.query.filter(Cake.category == "letters").all()
    return {"letter_cakes": {cake.id: cake.to_dict() for cake in letter_cakes}}

#all number cakes 
@cake_routes.route('/numbers')
def get_number_cakes():

    number_cakes = Cake.query.filter(Cake.category == "numbers").all()
    return {"number_cakes": {cake.id: cake.to_dict() for cake in number_cakes}}

#all shape cakes
@cake_routes.route('/shapes')
def get_shape_cakes():

    shape_cakes = Cake.query.filter(Cake.category == "shapes").all()
    return {"shape_cakes": {cake.id: cake.to_dict() for cake in shape_cakes}}

#all holiday cakes
@cake_routes.route('/holiday')
def get_holiday_cakes():

    holiday_cakes = Cake.query.filter(Cake.category == "holiday").all()
    return {"holiday_cakes": {cake.id: cake.to_dict() for cake in holiday_cakes}}

#cake by id
@cake_routes.route('/<int:cakeId>')
def get_single_restaurant(cakeId):

    cake_info= Cake.query.get(cakeId)
    return {"cake_info": cake_info.to_dict()}


# #customize and add a cake to the cart
# # Customize and add a cake to the cart
# @cake_routes.route('/<int:cakeId>', methods=['POST'])
# @login_required
# def add_cart_item(cakeId):

#     form = CustomizeCakeForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         size = request.json.get('size')
#         color = request.json.get('color')
#         gluten_free = request.json.get('glutenFree')
#         flavor = request.json.get('flavor')
#         cake_character = request.json.get('cakeCharacter')
#         food_allergens = request.json.get('foodAllergens')

#         cake = Cake.query.get(cakeId)

#         # Calculate the price based on the selected size
#         if size == "Small":
#             price = cake.smallPrice
#         elif size == "Medium":
#             price = cake.mediumPrice
#         elif size == "Large":
#             price = cake.largePrice
#         else:
#             return {'errors': 'Invalid size'}, 400

#         # Create a new cart item with the selected customization
#         cart_item = Cartitem(
#             userId=current_user.id,
#             cakeId=cakeId,
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


@cake_routes.route('/<int:cakeId>', methods=['POST'])
@login_required
def add_cart_item(cakeId):
    form = CustomizeCakeForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # Get the form data using the to_dict method
        form_data = form.to_dict()

        cake = Cake.query.get(cakeId)
        price = calculate_price(form_data['size'], cake)

        cart_item = Cartitem(
            userId=current_user.id,
            cakeId=cakeId,
            quantity=1,
            price=price,
            total=price,
            **form_data  # Pass the form data to the Cartitem model
        )

        db.session.add(cart_item)
        db.session.commit()

        return {"new_cartItem": cart_item.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Define the calculate_price function
def calculate_price(size, cake):
    if size == 'Small':
        return cake.smallPrice
    elif size == 'Medium':
        return cake.mediumPrice
    elif size == 'Large':
        return cake.largePrice
    else:
        return 0  # Or handle the case for invalid size
