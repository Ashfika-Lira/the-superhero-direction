import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<h1>RP Journals</h1>
			<h4>A research journal serves that narrow borderland which separates the known from the unknown.</h4>
            <h1>Total Prize: <span className="prize-amount">$500 Million</span></h1>			
		</div>
	);
};

export default Header;