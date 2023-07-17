from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    rating = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(255), nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=db.func.now())

    users = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'rating': self.rating,
            'review': self.review,
            'imageUrl': self.imageUrl,
            'createdAt': self.createdAt,
        }