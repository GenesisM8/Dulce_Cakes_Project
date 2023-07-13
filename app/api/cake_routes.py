from flask import Blueprint, request
from sqlalchemy import or_, and_
from app.models import Cake, db, User

cake_routes=Blueprint("cakes", __name__)

#all cakes
@cake_routes.route('')
def get_all_cakes():
    cakes = Cake.query.all()

    return{"all_cakes": {cake.id: cake.to_dict() for cake in cakes}}

#all letter cakes
@cake_routes.route('/letters')
def get_letter_cakes():

    letter_cakes = Cake.query.filter(Cake.category == "letters").all()
    return {"letter_cakes": [cake.to_dict() for cake in letter_cakes]}

#all number cakes 
@cake_routes.route('/numbers')
def get_number_cakes():

    number_cakes = Cake.query.filter(Cake.category == "numbers").all()
    return {"number_cakes": [cake.to_dict() for cake in number_cakes]}

#all shape cakes
@cake_routes.route('/shapes')
def get_shape_cakes():

    shape_cakes = Cake.query.filter(Cake.category == "shape").all()
    return {"shape_cakes": [cake.to_dict() for cake in shape_cakes]}

#all holiday cakes
@cake_routes.route('/holiday')
def get_holiday_cakes():

    holiday_cakes = Cake.query.filter(Cake.category == "holiday").all()
    return {"holiday_cakes": [cake.to_dict() for cake in holiday_cakes]}

#cake by id
@cake_routes.route('/<int:cakeId>')
def get_single_restaurant(cakeId):

    cake_info= Cake.query.get(cakeId)
    return {"cake_info": cake_info.to_dict()}

