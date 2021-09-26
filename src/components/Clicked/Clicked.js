import React from 'react';
import './Clicked.css'

const Clicked = (props) => {
    const {name, img} = props.scientist;
    return (
        <div className="selected">
            <img src={img} alt="" />
            <h5 className="scholar-clicked">{name}</h5>
        </div>
    );
};

export default Clicked;