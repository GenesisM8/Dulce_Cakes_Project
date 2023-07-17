from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Optional

class CustomizeCakeForm(FlaskForm):
    size = StringField('Size')
    color = StringField('Color')
    color2 = StringField('Color2')
    otherColor = StringField('Other Color')
    glutenFree =StringField('GlutenFree')
    flavor = StringField('Flavor')
    cakeCharacter = StringField('Cake Character')
    foodAllergens = StringField('Food Allergens')
    # comments = StringField('Comments')
    submit = SubmitField('Add to Cart')

    def to_dict(self):
        return {
            'size': self.size.data,
            'color': self.color.data,
            'color2': self.color2.data,
            'otherColor': self.otherColor.data,
            'glutenFree': self.glutenFree.data,
            'flavor': self.flavor.data,
            'cakeCharacter': self.cakeCharacter.data,
            'foodAllergens': self.foodAllergens.data,
            # 'comments': self.comments.data

        }