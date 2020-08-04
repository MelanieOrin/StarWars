import React from 'react';
import './PreviousFav.css';


const PreviousFav = ({ name, favorite, previousFav }) => {
    return (
        <div name={name} className={`previous ${!favorite && previousFav ? "blue" : "hide"}`}>Previously favorited</div>
    );
};

export default PreviousFav;