import React from 'react';
import classes from './Header.module.css'
import TopNav from "@/components/header/topNav/TopNav";
import Hero from "@/components/header/heroContent/Hero";

const Header = () => {
    return (
            <div className={classes.header}>
                <div className={classes.rectangle}>
                    <div className={classes.rectangleLeft}></div>
                    <div className={classes.rectangleRight}></div>
                </div>
                <div className={classes.headerContent}>
                    <TopNav/>
                    <Hero/>
                </div>
            </div>
    );
};

export default Header;