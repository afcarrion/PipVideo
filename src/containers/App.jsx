/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState.js';

import '../assets/styles/app.scss';

const API = "http://localhost:3000/initalState";

const App = () => {
    
    const initialState = useInitialState(API);

    return (
        <div className="App">
            <Header />
            <Search />
            {
                initialState.mylist.length > 0 && (
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item =>{
                            <CarouselItem key={item.id} {...item} />
                        })}
                    </Carousel>
                </Categories>)
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                            )
                    }
                </Carousel>
            </Categories>
            <Categories title="Originales de PipVideo">
                <Carousel>
                    {
                        initialState.originals.map(item =>
                            <CarouselItem key={item.id} {...item} />
                            )
                    }
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;
