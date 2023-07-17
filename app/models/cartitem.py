from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cartitem(db.Model):
    __tablename__='cartitems'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    cakeId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("cakes.id")))
    quantity = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(50))
    color2 = db.Column(db.String(50))
    otherColor= db.Column(db.String(100))
    size = db.Column(db.String(50), nullable=False)
    flavor = db.Column(db.String(50), nullable=False)
    cakeCharacter = db.Column(db.String(10), nullable=False)
    glutenFree = db.Column(db.String)
    foodAllergens = db.Column(db.String(100))
    # coments = db.Column(db.String(250))
    price = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)

    users = db.relationship("User", back_populates='cartitems')
    cakes = db.relationship("Cake", back_populates='cartitems')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'cakeId': self.cakeId,
            'quantity': self.quantity,
            'color': self.color,
            'color2': self.color2,
            'otherColor': self.otherColor,
            'size': self.size,
            'flavor': self.flavor,
            'cakeCharacter': self.cakeCharacter,
            'glutenFree': self.glutenFree,
            'foodAllergens': self.foodAllergens,
            # 'comments': self.coments,
            'price': self.price,
            'total': self.total
        }
