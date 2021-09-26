import React from 'react';
import './Scientists.css'

const Scientists = (props) => {
	console.log(props);
	const {name, img, country, role, lifespan, reward} = props.scientist;
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
			 </div>
		</div>
	);
};

export default Scientists;