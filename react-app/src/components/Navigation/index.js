// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';
// import logo from "../../assets/logo.png"
// import background from "../../assets/background.png"

// function Navigation({ isLoaded }) {
//     const sessionUser = useSelector(state => state.session.user);
//     const cartItems = useSelector((state) => state.cart.cartItems);
//     const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <div className='main-nav'>
//             <div className='nav'>
//                 <img src={logo} alt="Logo" className="logo" />
//                 {/* <img src={background} alt='background'/> */}
//                 <div className='icons'>
//                     {isLoaded && (
//                         <div>
//                             <ProfileButton user={sessionUser} />
//                         </div>
//                     )}
//                     <div>
//                         <NavLink exact to="/cart">
//                             <i className="fas fa-shopping-cart"></i>
//                             {totalCartItems > 0 && <span className="cart-item-count">({totalCartItems})</span>}
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>

//             <div className='sub-nav-container'>
//                 <div className='sub-nav'>
//                     <NavLink exact to="/">Home</NavLink>
//                     {/* Wrapping the cake-related links inside details element */}
//                     <details className='order-dropdown'>
//                         <summary className='order-nav'>Order</summary>
// 						<div className='category-down'>
// 						<NavLink exact to="/cakes">All Cakes</NavLink>
//                         <NavLink exact to="/cakes/letters">Letter Cakes</NavLink>
//                         <NavLink exact to="/cakes/numbers">Number Cakes</NavLink>
//                         <NavLink exact to="/cakes/shapes">Shape Cakes</NavLink>
//                         <NavLink exact to="/cakes/holiday">Holiday Cakes</NavLink>
// 						</div>
                        
//                     </details>
//                     <NavLink exact to="/reviews">Testimonials</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navigation;


// Navigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../assets/logo.png"
import background from "../../assets/background.png"

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='main-nav'>
            <div className='nav'>
                <img src={logo} alt="Logo" className="logo" />
                {/* <img src={background} alt='background'/> */}
                <div className='icons'>
                    {isLoaded && (
                        <div>
                            <ProfileButton user={sessionUser} />
                        </div>
                    )}
                    <div>
                        <NavLink exact to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                            {totalCartItems > 0 && <span className="cart-item-count">({totalCartItems})</span>}
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='sub-nav-container'>
                <div className='sub-nav'>
                    <NavLink exact to="/">Home</NavLink>
                    {/* Wrapping the cake-related links inside details element */}
                    <details
                        onMouseEnter={handleMenuOpen}
                        onMouseLeave={handleMenuClose}
                        open={isMenuOpen}
                    >
                        <summary className='order-nav'>Order</summary>
                        <div className='category-down'>
                            <NavLink
                                exact
                                to="/cakes"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                All Cakes
                            </NavLink>
                            <NavLink
                                exact
                                to="/cakes/letters"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Letter Cakes
                            </NavLink>
                            <NavLink
                                exact
                                to="/cakes/numbers"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Number Cakes
                            </NavLink>
                            <NavLink
                                exact
                                to="/cakes/shapes"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Shape Cakes
                            </NavLink>
                            <NavLink
                                exact
                                to="/cakes/holiday"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Holiday Cakes
                            </NavLink>
                        </div>
                    </details>
                    <NavLink exact to="/reviews">Testimonials</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;


