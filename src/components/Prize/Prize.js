import React from 'react';
import './Prize.css';

const Prize = (props) => {
	const {prize} = props;
    // const totalReducer = (previous, product) => previous + product.price;
	// const total = cart.reduce(totalReducer, 0);
	
	let total = 0;
	for(const prizes of prize){
		total = total +prizes.price;
	}

	// const shipping = 15;
	// const tax = (total + shipping) *10;
	// const grandTotal = total + shipping + tax;

	return (
		<div>
			<h3>Total Reward</h3>
		    <h5>Selected-persons: {props.prize.length}</h5>
			<br/>
			<p>Total: {total.toFixed(2)}</p>
			{/* <p>Shipping: {shipping}</p>
			<p>tax: {tax.toFixed(2)}</p>
			<p>Grand Total: {grandTotal.toFixed(2)}</p> */}
		</div>
	);
};

export default Prize;