/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable indent */
import React from 'react';
import '../assets/styles/components/search.scss';

const Search = () => {
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..." />
        </section>
    );
};

export default Search;
