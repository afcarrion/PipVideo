/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/styles/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/styles/static/user-icon.png';

const Header = () => {
    return (
        <header className='header'>
        <img className='header__img' src={logo} alt='Platzi Video' />
        <div className='header__menu'>
        <div className='header__menu--profile'>
            <img src={userIcon} alt='' />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href='/'>Cuenta</a></li>
            <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
        </div>
        </header>
    );
};

export default Header;
