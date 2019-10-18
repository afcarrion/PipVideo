/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/categories.scss';

const Catergories = ({ children, title }) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    );
};

export default Catergories;
