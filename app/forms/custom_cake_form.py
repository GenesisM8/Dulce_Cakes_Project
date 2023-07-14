from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Optional

class CustomizeCakeForm(FlaskForm):
    size = StringField('Size')
    color = StringField('Color')
    glutenFree =StringField('GlutenFree')
    flavor = StringField('Flavor')
    cakeCharacter = StringField('Cake Character')
    foodAllergens = StringField('Food Allergens')
    submit = SubmitField('Add to Cart')

    def to_dict(self):
        return {
            'size': self.size.data,
            'color': self.color.data,
            'glutenFree': self.glutenFree.data,
            'flavor': self.flavor.data,
            'cakeCharacter': self.cakeCharacter.data,
            'foodAllergens': self.foodAllergens.data
        }