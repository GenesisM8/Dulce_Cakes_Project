from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Optional

class CustomizeCakeForm(FlaskForm):
    # size = SelectField('Size', choices=[('Small', 'Small'), ('Medium', 'Medium)'), ('Large', 'Large')])
    # color = SelectField('Color', choices=[('same','As Shown'), ('Pink', 'Pink'), ('Blue', 'Blue'), ('Purple', 'Purple'), ('Yellow', 'Yellow'), ('Green', 'Green'), ('White', 'White'), ('Other', 'Other')], validators=[DataRequired()])
    # glutenFree = SelectField('GlutenFree', choices=[('Regular', 'Regular'), ('GlutenFree', 'GlutenFree')])
    # flavor = SelectField('Cream Flavor', choices=[('Vanilla', 'Vanilla'), ('Chocolate', 'Chocolate'), ('Oreo', 'Oreo'), ('Lemon', 'Lemon'), ('Strawberry', 'Strawberry'), ('Pistachio', 'Pistachio')], validators=[DataRequired()])
    # cakeCharacter = StringField('Cake Character', validators=[Optional()])
    # foodAllergens = StringField('Food Allergens', validators=[Optional()])
    # submit = SubmitField('Add to Cart')

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