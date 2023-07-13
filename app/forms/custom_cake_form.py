from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Optional

class CustomizeCakeForm(FlaskForm):
    size = SelectField('Size', choices=[('Small', 'Small (8-10 servings)'), ('Medium', 'Medium (12-16 servings)'), ('Large', 'Large (18-25 servings)')])
    color = SelectField('Color', choices=[('same','As Shown'), ('Pink', 'Pink'), ('Blue', 'Blue'), ('Purple', 'Purple'), ('Yellow', 'Yellow'), ('Green', 'Green'), ('White', 'White')], validators=[DataRequired()])
    glutenFree = SelectField('Base Options', choices=[('regular', 'Regular'), ('gluten-free', 'Gluten-Free')], validators=[DataRequired()])
    flavor = SelectField('Cream Flavor', choices=[('Vanilla', 'Vanilla'), ('Chocolate', 'Chocolate'), ('Oreo', 'Oreo'), ('Lemon', 'Lemon'), ('Strawberry', 'Strawberry'), ('Pistachio', 'Pistachio')], validators=[DataRequired()])
    cakeCharacter = StringField('Cake Character', validators=[Optional()])
    foodAllergens = StringField('Food Allergens', validators=[Optional()])
    submit = SubmitField('Add to Cart')