from app.models import db, Cake, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cakes():
  
    cake1 = Cake(
        name = "Single Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://i.pinimg.com/564x/bb/43/1f/bb431fbabe3701210d01f08e06872d96.jpg"
    )

    cake2 = Cake(
        name = "Single Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-18-800x800.jpg"
    )


    cake3 = Cake(
        name = "Single Letter Cake",
        category = "lettesr",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-35-800x800.jpg"
    )

    cake4 = Cake(
        name = "Double Letters Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 95,
        mediumPrice = 135,
        largePrice = 185,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-29-800x800.jpg"
    )

    cake5 = Cake(
        name = "Double Letters Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 95,
        mediumPrice = 135,
        largePrice = 185,
        imageUrl = "https://i.pinimg.com/564x/0d/6d/d5/0d6dd5d0dce6edd3c875e5d2c49254d9.jpg"
    )

    cake6 = Cake(
        name = "Three letters Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 110,
        mediumPrice = 160,
        largePrice = 195,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-44-800x800.jpg"
    )

    cake7 = Cake(
        name = "Three letters Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 110,
        mediumPrice = 160,
        largePrice = 195,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-8-800x800.jpg"
    )

    cake8 = Cake(
        name = "Three letters Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 110,
        mediumPrice = 160,
        largePrice = 195,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/05/Frudeco-April-0-800x800.jpeg"
    )

    cake9 = Cake(
        name = "Single Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3316-800x800.jpg"
    )

    cake10 = Cake(
        name = "Single Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3283-800x800.jpg"
    )

    cake11 = Cake(
        name = "Single Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/06/Frudeco-June-16-e1687974356483.jpeg"
    )

    cake12 = Cake(
        name = "Single Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-21-e1679889773764-800x800.jpg"
    )

    cake13 = Cake(
        name = "Double Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3324.jpg"
    )

    cake14 = Cake(
        name = "Double Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-48-800x800.jpg"
    )

    cake15 = Cake(
        name = "Crown Shape Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3312-800x800.jpg"
    )

    cake16 = Cake(
        name = "Butterfly Shape Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/DSC07456-600x875-1.jpg"
    )

    cake17 = Cake(
        name = "Pineapple Shape Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://i.pinimg.com/564x/bb/b3/09/bbb3096b366bec11bea4f39257f6a8e4.jpg"
    )

    cake18 = Cake(
        name = "TKS giving Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-Sesion-Oct-28-800x800.jpg"
    )

    cake19 = Cake(
        name = "Christmas Santa Hat Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2021/12/IMG_7009-copy-scaled-800x800.jpg"
    )

    cake20 = Cake(
        name = "Christmas Stocking Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2021/12/IMG_6985-copy-1-scaled-800x800.jpg"
    )

    cake21 = Cake(
        name = "Christmas Tree Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-December-Zone-VII-23-800x800.jpg"
    )

    cake22 = Cake(
        name = "Father's Day Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 85,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/06/IMG_3301-800x800.jpg"
    )


    db.session.add(cake1)
    db.session.add(cake2)
    db.session.add(cake3)
    db.session.add(cake4)
    db.session.add(cake5)
    db.session.add(cake6)
    db.session.add(cake7)
    db.session.add(cake8)
    db.session.add(cake9)
    db.session.add(cake10)
    db.session.add(cake11)
    db.session.add(cake12)
    db.session.add(cake13)
    db.session.add(cake14)
    db.session.add(cake15)
    db.session.add(cake16)
    db.session.add(cake17)
    db.session.add(cake18)
    db.session.add(cake19)
    db.session.add(cake20)
    db.session.add(cake21)
    db.session.add(cake22)
    db.session.commit()


def undo_cakes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cakes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cakes"))
    db.session.commit() 