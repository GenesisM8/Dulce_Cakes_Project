from app.models import db, Cake, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cakes():
  
    cake1 = Cake(
        name = "Letter Cake Gradient",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://i.pinimg.com/564x/bb/43/1f/bb431fbabe3701210d01f08e06872d96.jpg"
    )

    cake2 = Cake(
        name = "Shades Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3316-800x800.jpg"
    )
    cake3 = Cake(
        name = "Golden Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/05/Frudeco-April-0-800x800.jpeg"
    ) 
    
    cake4 = Cake(
        name = "Crown Shape",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3312-800x800.jpg"
    )
    cake8 = Cake(
        name = "Orchid Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-48-800x800.jpg"
    )

    cake5 = Cake(
        name = "Number Cake Gradient",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3283-800x800.jpg"
    )

    cake6 = Cake(
        name = "Olive Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://i.pinimg.com/564x/0d/6d/d5/0d6dd5d0dce6edd3c875e5d2c49254d9.jpg"
    )

    cake7 = Cake(
        name = "Butterfly Shape Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/DSC07456-600x875-1.jpg"
    )

  
    cake9 = Cake(
        name = "Christmas Stocking Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2021/12/IMG_6985-copy-1-scaled-800x800.jpg"
    )


    cake10 = Cake(
        name = " Strawberry Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-18-800x800.jpg"
    )


    cake11 = Cake(
        name = "Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-35-800x800.jpg"
    )

    cake12 = Cake(
        name = "Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-29-800x800.jpg"
    )

  
    cake13 = Cake(
        name = "Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-44-800x800.jpg"
    )

    cake14 = Cake(
        name = "Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-8-800x800.jpg"
    )


    cake15 = Cake(
        name = "Rose Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-21-e1679889773764-800x800.jpg"
    )

    cake16 = Cake(
        name = "TKS giving Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-Sesion-Oct-28-800x800.jpg"
    )
      
    cake17 = Cake(
        name = "Pineapple Shape Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://i.pinimg.com/564x/bb/b3/09/bbb3096b366bec11bea4f39257f6a8e4.jpg"
    )

    cake18 = Cake(
        name = "Father's Day Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/06/IMG_3301-800x800.jpg"
    )

    cake19 = Cake(
        name = "Christmas Santa Hat Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2021/12/IMG_7009-copy-scaled-800x800.jpg"
    )

    cake20 = Cake(
        name = "Christmas Tree Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-December-Zone-VII-23-800x800.jpg"
    )

    cake21 = Cake(
        name = "Baby Onesite Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/89959414_1361620697358806_5808077600001622016_n.jpg"
    )

    cake22 = Cake(
        name = "Mermaid Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/12/Frudeco-Sesion-Oct-8.jpg"
    )

    cake23 = Cake(
        name = "Letter Cake + Hearts",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/08/DSC02798-scaled.jpg"
    )


    cake24 = Cake(
        name = "Love Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/01/Frudeco-January-41.jpg"
    )

    cake25 = Cake(
        name = "Choco Lover + Crown Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2019/03/IMG_20200519_160810_138.jpg"
    )

    cake26 = Cake(
        name = "Letter Cake with Gold",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/12/Frudeco-Sesion-Oct-11.jpg"
    )

    cake27 = Cake(
        name = "Rainbow Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/245617229_1813025855551619_2165543655413182274_n.jpg"
    )

    cake28 = Cake(
        name = "Unicorn Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/06/Frudeco-June-71-800x800.jpeg"
    )

    cake29 = Cake(
        name = "Berries Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3302-e1664669597697.jpg"
    )

    cake30 = Cake(
        name = "Mother's Day Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-34-800x800.jpg"
    )

    cake31 = Cake(
        name = "Tropical Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/08/DSC00100-Edit-scaled.jpg"
    )

    cake32 = Cake(
        name = "Choco-Berries Letter Cake",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/IMG_3285.jpg"
    )

    cake33 = Cake(
        name = "Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/04/IMG_4838-1-scaled-800x800.jpg"
    )

    cake34 = Cake(
        name = "Frozen Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2019/03/IMG_20200624_155207_338.jpg"
    )

    cake35 = Cake(
        name = "Halloween Pumpkin Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/Frudeco-October-19-e1665164398838-800x800.jpg"
    )

    cake36 = Cake(
        name = "Halloween Skull Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/Frudeco-October-16-800x800.jpg"
    )

    cake37 = Cake(
        name = "Halloween Spider Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/10/Frudeco-October-18-e1665165347583-800x800.jpg"
    )

    cake38 = Cake(
        name = "New Year Champagne Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/champagne-2023-800x800.jpg"
    )

    cake39 = Cake(
        name = "New Year Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-December-Zone-VII-8-e1670287880145.jpg"
    )

    cake40 = Cake(
        name = "Thanksgiving Turkey Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/11/Frudeco-Sesion-Oct-15.jpg"
    )

    cake41 = Cake(
        name = "Easter Bunny Cake",
        category = "holiday",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2022/03/303A5162-copy-scaled.jpg"
    )

    cake42 = Cake(
        name = "Easter Bunny Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2019/03/IMG_20200520_115945_294.jpg"
    )

    cake43 = Cake(
        name = "Cactus Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/IMG_20211222_202007_152-1.jpg"
    )

    cake44 = Cake(
        name = "Dollar Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/03/220351656_1749884978532374_1266231943019768175_n.jpg"
    )

    cake45 = Cake(
        name = "Flamingo Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/06/Frudeco-June-22.jpeg"
    )

    cake46 = Cake(
        name = "Boy or Girl? Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://www.frudeco.com/wp-content/uploads/2023/06/Frudeco-June-44-e1687984284411.jpeg"
    )

    cake47 = Cake(
        name = "Engagement Ring Cake",
        category = "shapes",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/186480903_294035382384867_1046116594179791324_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=x8x2ehIRWRgAX96u6Oh&_nc_ht=scontent-atl3-2.xx&oh=00_AfDGEmehZXIVLciKVHhvjEkat7lSJ3r8wdkM_TGxSyKXXw&oe=64E576EA"
    )

    cake48 = Cake(
        name = "Choco Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/241521917_403550974766640_7945642176790031050_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=SommWdLnal8AX-2H3lE&_nc_ht=scontent-atl3-2.xx&oh=00_AfC1pFwcenGbXUCD_UBkrvWbKtmDMYn8AtO14Qt55QdjIA&oe=64C3A93E"
    )

    cake49 = Cake(
        name = "Rose Gold",
        category = "letters",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/169337430_264776685310737_7837757207398418629_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=jVXWWl5B7vwAX-fUS31&_nc_ht=scontent-atl3-2.xx&oh=00_AfAXg-B6xhd4w-nAFWWcmclL02nYJYDkWAwCVl0FpCd9Nw&oe=64E56D1C"
    )

    cake50 = Cake(
        name = "Number Cake",
        category = "numbers",
        description = "Dulce's cakes are made of shortbread-almond tart with a creamy mascarpone frosting; As a result, a very light in flavor, different and extremely delicious cake perfect for any ocasion.", 
        smallPrice = 89,
        mediumPrice = 130,
        largePrice = 180,
        imageUrl = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/179967535_282651633523242_215702394379370101_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=xH-DKRMQRnMAX9p66oi&_nc_ht=scontent-atl3-1.xx&oh=00_AfA27YxDb54SU9po5-TjAbZoMdzqVgNHdmzxU3CV0vdbeg&oe=64E562EE"
    )
















    
    db.session.add(cake1)
    db.session.add(cake2)
    db.session.add(cake4)
    db.session.add(cake3)
    db.session.add(cake12)
    db.session.add(cake23)
    db.session.add(cake8)
    db.session.add(cake30)
    db.session.add(cake7)
    db.session.add(cake6)
    db.session.add(cake10)
    db.session.add(cake11)
    db.session.add(cake13)
    db.session.add(cake15)
    db.session.add(cake14)
    db.session.add(cake5)
    db.session.add(cake17)
    db.session.add(cake18)
    db.session.add(cake41)
    db.session.add(cake40)
    db.session.add(cake16) 
    db.session.add(cake20)
    db.session.add(cake21)
    db.session.add(cake22)
    db.session.add(cake24)
    db.session.add(cake25)
    db.session.add(cake26)
    db.session.add(cake27)
    db.session.add(cake28)
    db.session.add(cake29)
    db.session.add(cake9)
    db.session.add(cake19)
    db.session.add(cake31)
    db.session.add(cake42)
    db.session.add(cake32)
    db.session.add(cake33)
    db.session.add(cake34)
    db.session.add(cake44)
    db.session.add(cake36)
    db.session.add(cake35)
    db.session.add(cake46)
    db.session.add(cake37)
    db.session.add(cake45)
    db.session.add(cake38)
    db.session.add(cake39)
    db.session.add(cake43)
    db.session.add(cake47)
    db.session.add(cake48)
    db.session.add(cake49)
    db.session.add(cake50)

    db.session.commit()
    



def undo_cakes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cakes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cakes"))
    db.session.commit() 