import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const cartItems = useSelector((state) => state.cart.cartItems);

	const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);



	return (
		<div>
		<ul className='nav'>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			<NavLink exact to="/cart" className="cart-link">
  <i className="fas fa-shopping-cart"></i>
  {totalCartItems > 0 && <span className="cart-item-count">{totalCartItems}</span>}
</NavLink>

		</ul>
		<div className='sub-nav'>
			<NavLink exact to="/cakes">All Cakes</NavLink>	
			<NavLink exact to="/cakes/letters">Letter Cakes</NavLink>
			<NavLink exact to="/cakes/numbers">Number Cakes</NavLink>
			<NavLink exact to="/cakes/shapes">Shape Cakes</NavLink>
			<NavLink exact to="/cakes/holiday">Holiday Cakes</NavLink>
		</div>
		</div>
	);
}

export default Navigation;