import React, {useEffect, useState} from 'react';
import Scientists from '../Scientists/Scientists';
import Prize from '../Prize/Prize';
import "./Selection.css"

const Selection = () => {
	const [select, setSelection] = useState([]);
	const [prize, setPrize] = useState([]);

	useEffect(() => {
		fetch('./scientists.JSON')
		.then(res => res.json())
		.then(data => setSelection(data));
	}, [])
	const handleAddToCart = (select) => {
		const newPrize = [...prize, select];
		setPrize(newPrize);
	}
	return (
		<div className="selection-container">
			<div className="scientists-container">
		{
            select.map(scientist=> <Scientists
				key={scientist.key}
				scientist={scientist}
				handleAddToCart={handleAddToCart}
				>
			</Scientists>)
		}
	</div>
	<div className="prize-container">
        <Prize prize= {prize}></Prize>
	</div>
		</div>
	);
};

export default Selection;