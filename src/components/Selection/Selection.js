import React, {useEffect, useState} from 'react';
import Scientists from '../Scientists/Scientists';
import "./Selection.css"

const Selection = () => {
	const [select, setSelection] = useState([]);

	useEffect(() => {
		fetch('./scientists.JSON')
		.then(res => res.json())
		.then(data => setSelection(data));
	}, [])
	return (
		<div className="selection-container">
			<div className="scientists-container">
		{
            select.map(scientist=> <Scientists
				key={scientist.key}
				scientist={scientist}
				>
			</Scientists>)
		}
	</div>
		</div>
	);
};

export default Selection;