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
				<NavLink exact to="/">
					<img src={logo} alt="Logo" className="logo" />
				</NavLink>
                
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
					<div >
						<NavLink exact to="/" className='home-text' >HOME</NavLink>
					</div>
                   
                    <details
                        onMouseEnter={handleMenuOpen}
                        onMouseLeave={handleMenuClose}
                        open={isMenuOpen}
                    >
                        <summary>ORDER</summary>
                        <div className='category-down'>
                            <NavLink
                                exact
                                to="/cakes"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                See all
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
					<div>
						<NavLink exact to="/reviews" className='home-text'>TESTIMONIALS</NavLink>
					</div>
                    
                </div>
            </div>
        </div>
    );
}

export default Navigation;


