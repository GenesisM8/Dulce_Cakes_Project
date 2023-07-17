from app.models import db, Review, User, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        userId = 2,
        rating = 5,
        review = "Absolutely divine cakes! Each bite is a taste of heaven. Highly recommend this cake business for all occasions.",
        imageUrl= '/images/ScreenShot1'
    )

    review2 = Review(
        userId = 2,
        rating = 5,
        review = "Deliciously moist and beautifully decorated cakes. You can't go wrong with their flavors and presentation. A must-try!",
        imageUrl= "/images/ScreenShot2"
    )

    review3 = Review(
        userId = 1,
        rating = 5,
        review = "Top-notch service and the cakes speak for themselves – pure perfection. So glad I found this gem of a cake business! ",
        imageUrl='/images/ScreenShot3'
    )

    


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()  
