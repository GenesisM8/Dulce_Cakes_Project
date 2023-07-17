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


@cake_routes.route('/<int:cakeId>', methods=['POST'])
@login_required
def add_cart_item(cakeId):
    form = CustomizeCakeForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    

    if form.validate_on_submit():
        form_data = form.to_dict()

        cake = Cake.query.get(cakeId)
        size = form_data['size']
        price = calculate_price(size, cake)

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
    

