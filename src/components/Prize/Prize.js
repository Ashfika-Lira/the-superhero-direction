import React from 'react';
import Clicked from '../Clicked/Clicked';
import './Prize.css';

const Prize = (props) => {
	const {prize} = props;
	
	let total = 0;
    for (const prizes of prize){
        total = total + prizes.reward;
    }

	return (
		<div className="reward-section">
			<h2>Selected-persons: {props.prize.length}</h2>
			<h3>Total Reward: ${total}</h3>
			<br/>
             <ol> <span className="chosen-people">Your selected scholars</span>
                 {
                     prize.map( scientist => <Clicked
					  scientist={scientist}
					  >
                     </Clicked>)
                 }
             </ol>
        </div>
    );
};

export default Prize;