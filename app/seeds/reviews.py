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
        rating = 4,
        review = "Top-notch service and the cakes speak for themselves – pure perfection. So glad I found this gem of a cake business! ",
        imageUrl='https://s3-media0.fl.yelpcdn.com/bphoto/8dkZArpAP_kK0yRB8-s-AQ/o.jpg'
    )

    review4 = Review(
        userId = 3,
        rating = 5,
        review = "Amazing cakes & top-notch service! A true gem of a cake business. So glad I found them!",
        imageUrl='https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/147412448_225705042551235_2160641776346652317_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=5_Nc429VPxQAX_GH3rF&_nc_ht=scontent-atl3-1.xx&oh=00_AfBOx1reF8AWyNre8LwRP13e-anZj-WoiW5dXeYriYoAjA&oe=64E550F9'
    )



    


    db.session.add(review1)
    db.session.add(review4)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()  
