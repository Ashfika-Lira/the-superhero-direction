import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
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
			<div>
			  <button
			onClick={() => props.handleAddToCart(props.scientist)}
			className="btn-regular"
			>{cartIcon} Select Now</button>
			</div>
			<div className="social-icons">
			<FontAwesomeIcon style={{ color: "#4267B2" }} className="social-icon" icon={faFacebookSquare} />
			<FontAwesomeIcon style={{ color: "#2867B2" }} className="social-icon" icon={faTwitterSquare} />
			</div>
			</div>
		</div>
	);
};

export default Scientists;