/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/carousel.scss';

const Carousel = ({ children }) => {
    return (
        <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
        </section>
    );
};

export default Carousel;
