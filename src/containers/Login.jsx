/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React from 'react';
import googleIcon from '../assets/styles/static/google-icon.png';
import twitterIcon from '../assets/styles/static/twitter-icon.png';
import '../assets/styles/components/login.scss';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia Sesión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} /> Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} /> Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
    </section>
  </section>
);

export default Login;
