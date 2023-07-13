from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cartitem(db.Model):
    __tablename__='cartitems'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    cakeId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("cakes.id")))
    quantity = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(255))
    size = db.Column(db.String(255), nullable=False)
    flavor = db.Column(db.String(255), nullable=False)
    cakeCharacter = db.Column(db.String(255), nullable=False)
    glutenFree = db.Column(db.String)
    foodAllergens = db.Column(db.String(255))
    price = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)

    users = db.relationship("User", back_populates='cartitems')
    cakes = db.relationship("Cake", back_populates='cartitems')


    # def update_size(self, new_size):
    #     if new_size in ['Small', 'Medium', 'Large']:
    #         self.size = new_size
    #         cake = self.cakes
    #         if new_size == 'Small':
    #             self.price = cake.smallPrice
    #         elif new_size == 'Medium':
    #             self.price = cake.mediumPrice
    #         elif new_size == 'Large':
    #             self.price = cake.largePrice
    #         self.total = self.price * self.quantity

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'cakeId': self.cakeId,
            'quantity': self.quantity,
            'color': self.color,
            'size': self.size,
            'flavor': self.flavor,
            'cakeCharacter': self.cakeCharacter,
            'glutenFree': self.glutenFree,
            'foodAllergens': self.foodAllergens,
            'price': self.price,
            'total': self.total
        }
