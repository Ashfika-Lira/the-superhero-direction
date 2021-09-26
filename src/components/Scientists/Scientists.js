import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Scientists.css'

const Scientists = (props) => {
	const {name, img, country, role, lifespan, reward} = props.scientist;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
	return (
		<div className="scholar-card">
             <div>
			 <img src={img} alt="" />
			 </div>
			 <div>
			 <h4 className="scholar-name">Name: {name}</h4>
			 <p>Profession: {role}</p>
			<p>Lifespan: {lifespan}</p>
			<p>Country: {country}</p>
			<p>Reward: ${reward}</p>
			<button
			onClick={() => props.handleAddToCart(props.scientist)}
			className="btn-regular"
			>{cartIcon} Select Now</button>
			 </div>
		</div>
	);
};

export default Scientists;