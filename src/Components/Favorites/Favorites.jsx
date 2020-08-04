import React from 'react';
import './Favorites.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Favorites = ({ name, favorite, handleClick }) => {
  return (
    <FontAwesomeIcon icon={faStar} name={name} className={`star ${favorite ? "yellow" : "gray"}`} onClick={() => { handleClick() }} />
  );
};

export default Favorites;