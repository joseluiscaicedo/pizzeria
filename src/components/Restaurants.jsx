/* eslint-disable react/display-name */
import React, { useState } from 'react';
import RestaurantItem from './RestaurantItem';
import { logoWhitePizza, passwordIcon, pizzaImg,logoAllWhitePizza,facebookLogo,instagramLogo } from '../constants';

import '../assets/styles/Restaurants.scss';

const SearchTerm = ({ setSearchRestaurants }) => (event) => {
  setSearchRestaurants(event.target.value);
};
const filterTerm = ({ searchRestaurants }) => (event) => {
  if (searchRestaurants === '') return event;
  if (event.name.toLowerCase().includes(searchRestaurants.toLowerCase())) {
    return event;
  }
};

const mapRestaurant = ({ RestaurantItem }) => ({ id, ...props }) => <RestaurantItem key={id} {...props} />;

const Restaurants = ({ store }) => {
  const [searchRestaurants, setSearchRestaurants] = useState('');

  return (
    <section className='restaurants'>
      <section className='restaurants__FirstColumn'>
        <img className='firstColumn__imgPizzaIcon'src={logoWhitePizza} alt='PizzaIcon' />
        <img className='firstColumn__imgPizzaImg' src={pizzaImg} alt='PizzaImg' />
      </section>
      <section className='restaurants__SecondColumn'>
        <div className='SecondColumn__header'>
          <a className='header__return' href='/' alt='returnToLogin'>
            <img className='header__img' src={passwordIcon} alt='passwordIcon' />
            Salir
          </a>
          <h5 className='header__category'>Pizzerías</h5>
        </div>
        <div className='SecondColumn__main'>
          <h1 className='main__Title'>Tiendas</h1>
          <h3 className='main__SubTitle'>Escoge tu pizzería favorita</h3>
            <input
            className='main__search'
            type='text'
            id='searchInput'
            placeholder='Buscar...'
              onChange={SearchTerm({ setSearchRestaurants })}
            />
          <section className='restaurants'>
            {store.filter(filterTerm({ searchRestaurants })).map(mapRestaurant({ RestaurantItem }))}
          </section>
        </div>
        <div className='SecondColumn__footer'>
          <section className='footer__SocialMedia'>
            <img className='SocialMedia__facebook' src={facebookLogo} alt='facebookIcon' />
            <img className='SocialMedia__instagram' src={instagramLogo} alt='instagramIcon' />
          </section>
          <img className='footer__logoWhitePizza' src={logoAllWhitePizza} alt='logoAllWhitePizza' />
        </div>
      </section>
    </section>
  );
};

export default Restaurants;
