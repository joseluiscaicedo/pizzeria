import React from 'react';
import { loginBestPizzaImg, passwordIcon, pizzaImg, userIcon } from '../constants';

import '../assets/styles/LoginForm.scss';


const LoginForm = ({ handleSubmit, handleInput }) => {
  const message=()=> alert ('Comuníquese con el departamento de sistemas')

  return (
    <main className='main'>
      <section className='main-firstColumn'>
      <img className='firstColumn__img' src={pizzaImg} alt='pizza' />
      </section>
      <section className='main-secondColumn'>
        <img className='secondColumn__img' src={loginBestPizzaImg} alt='LoginBestPizza' />
        <h1 className='secondColumn__title'>Bienvenido</h1>
        <h2 className='secondColumn__subtitle'>A las mejores pizzas del país</h2>
        <form className='secondColumn__form' onSubmit={handleSubmit}>
          <label aria-labelledby='email' className='form__label' htmlFor='userName'>
            <input
              aria-label='email'
              className='form__input'
              type='email'
              id='email'
              name='email'
              placeholder='Usuario'
              rol='tab'
              required
              onChange={handleInput}
            />
            <img className='form__img' src={userIcon} alt='userIcon' />
          </label>
          <label aria-labelledby='password' className='form__label' htmlFor='password'>
            <input
              aria-label='password'
              className='form__input'
              type='password'
              id='password'
              name='password'
              placeholder='Contraseña'
              rol='tab'
              required
              onChange={handleInput}
            />
            <img className='form__img' src={passwordIcon} alt='passwordIcon' />
          </label>
          <input
            className='form__resetPassword'
            type='button'
            value='¿Olvidaste tu contraseña?'
            id='resetPassword'
            onClick={message}
            aria-labelledby='resetPassword'
          />
          <input
            className='form__button'
            type='submit'
            value='Iniciar sesión'
            id='submit'
            aria-labelledby='submit'
          />
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
