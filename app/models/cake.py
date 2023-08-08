from .db import db, environment, SCHEMA, add_prefix_for_prod
from .favorite import favorites

class Cake(db.Model):
    __tablename__= 'cakes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255))
    smallPrice = db.Column(db.Integer, nullable=False)
    mediumPrice = db.Column(db.Integer, nullable=False)
    largePrice = db.Column(db.Integer, nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)

    cartitems = db.relationship("Cartitem", back_populates='cakes', cascade="all, delete")
    cake_favorites = db.relationship(
        "User",
        secondary=favorites,
        back_populates="user_favorites",
        cascade="delete, all"
    )

    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'smallPrice': self.smallPrice,
            'mediumPrice': self.mediumPrice,
            'largePrice': self.largePrice,
            'imageUrl': self.imageUrl
        }
    
    def to_dict_fav(self):
        return {
            "id":self.id,
            'name': self.name,
            'category': self.category,
            'imageUrl': self.imageUrl
        }