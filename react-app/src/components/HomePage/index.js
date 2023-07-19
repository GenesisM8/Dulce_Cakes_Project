// import React, { useState, useEffect } from "react";
// import './homePage.css'

// const HomePage = () => {
//     const images = [
//         "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-22.jpg",
//         "https://www.frudeco.com/wp-content/uploads/2023/02/Frudeco-Feb-15-scaled.jpg",
       
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         // This function will switch the image index every 5 seconds
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 5000);

//         // Clean up the interval on unmount
//         return () => clearInterval(interval);
//     }, [images.length]);

//     return (
//         <div>
//             <div className="img-container">
//                 <img
//                     src={images[currentImageIndex]}
//                     alt="home-img"
//                     className="home-img"
//                 />
//             </div>
//         </div>
//     );
// };

// export default HomePage;


// HomePage.js
import React, { useState, useEffect } from "react";
import './homePage.css'

const HomePage = () => {
    const images = [
        "https://www.frudeco.com/wp-content/uploads/2023/03/Frudeco-Feb-04-22.jpg",
        "https://www.frudeco.com/wp-content/uploads/2023/02/Frudeco-Feb-15-scaled.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // This function will switch the image index every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className="img-container">
                <img
                    src={images[currentImageIndex]}
                    alt="home-img"
                    className="home-img"
                />
            </div>
        </div>
    );
};

export default HomePage;
