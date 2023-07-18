from app.models import db, Review, User, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        userId = 2,
        rating = 5,
        review = "Absolutely divine cakes! Each bite is a taste of heaven. Highly recommend this cake business for all occasions.",
        imageUrl= 'https://s3-media0.fl.yelpcdn.com/bphoto/CUcJe7S-Vl4reFTIj_Gepw/o.jpg'
    )

    review2 = Review(
        userId = 2,
        rating = 5,
        review = "Deliciously moist and beautifully decorated cakes. You can't go wrong with their flavors and presentation. A must-try!",
        imageUrl= "https://s3-media0.fl.yelpcdn.com/bphoto/QCe_G4wpEMm9WEx3c7V04w/o.jpg"
    )

    review3 = Review(
        userId = 1,
        rating = 3,
        review = "Top-notch service and the cakes speak for themselves – pure perfection. So glad I found this gem of a cake business! ",
        imageUrl='https://s3-media0.fl.yelpcdn.com/bphoto/8dkZArpAP_kK0yRB8-s-AQ/o.jpg'
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
