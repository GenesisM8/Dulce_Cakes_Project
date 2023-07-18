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
		<div className='main-nav'>
		<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f5cf225-3fed-42e2-819a-6b96622e434f/dc69yt3-37e18500-94ca-46cb-8f83-5510325bf72a.png/v1/fill/w_648,h_1232,q_70,strp/light_pink_gradient_background_by_virus_xenon_dc69yt3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkwMCIsInBhdGgiOiJcL2ZcLzJmNWNmMjI1LTNmZWQtNDJlMi04MTlhLTZiOTY2MjJlNDM0ZlwvZGM2OXl0My0zN2UxODUwMC05NGNhLTQ2Y2ItOGY4My01NTEwMzI1YmY3MmEucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.U6FY4Thht8bIraq0nA0QGGQ0SfQyKpdsGYdP-fWFWV0" alt="Logo" className="pink-img" />
		<div className='nav'>
			<h1>Dulce Cakes</h1>
			<div className='icons'>
				{isLoaded && (
				<div >
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
			<NavLink exact to="/cakes">All Cakes</NavLink>	
			<NavLink exact to="/cakes/letters">Letter Cakes</NavLink>
			<NavLink exact to="/cakes/numbers">Number Cakes</NavLink>
			<NavLink exact to="/cakes/shapes">Shape Cakes</NavLink>
			<NavLink exact to="/cakes/holiday">Holiday Cakes</NavLink>
			<NavLink exact to="/reviews">Testimonials</NavLink>
			</div>
			
		</div>
		</div>
	);
}

export default Navigation;