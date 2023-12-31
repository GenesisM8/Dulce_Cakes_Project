from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .favorite import favorites


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    hashed_password = db.Column(db.String(300), nullable=False)

    cartitems = db.relationship("Cartitem", back_populates="users", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="users", cascade="all, delete") 
    user_favorites = db.relationship(
        "Cake",
        secondary=favorites,
        back_populates="cake_favorites",
        cascade="delete, all")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
            'favorites': {fav.id: fav.to_dict_fav() for fav in self.user_favorites}   
        }
