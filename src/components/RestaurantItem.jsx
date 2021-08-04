import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';

import '../assets/styles/RestaurantItem.scss';

const RestaurantItem = ({ name, address, id }) => {
  return (
    <div className='restaurantItem'>
      <img className='restaurantItem__img' id={name} src={images[name]} aria-label={name} alt={name} />
      <h1 className='restaurantItem__name'>{name}</h1>
      <h2 className='restaurantItem__address'>{address}</h2>
      <Link className='restaurantItem__link' aria-label={name} to={`/Detalles/${id}`}>Más Detalles</Link>
    </div>
  );
};

export default RestaurantItem;
