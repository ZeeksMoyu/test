import React from 'react';
import classes from './Image.module.css'

const ImageHeader = () => {
    return (
        <div className={classes.headerAd}>
            <h1>High-Quality
                Furniture Just
                For You
            </h1>
            <span>Our furniture is made from selected and best quality materials that are suitable for your dream home</span>
            <button>Shop Now</button>
        </div>
    );
};

export default ImageHeader;