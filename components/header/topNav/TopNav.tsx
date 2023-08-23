'use client'

import React, {useState} from 'react';
import classes from './TopNav.module.css'
import useNav from '../../talons/useNav'
import Image from "next/image";
import Link from "next/link";


const TopNav = () => {

    const {navMenu} = useNav()

    return (
        <div className={classes.topNav}>
                <div className={classes.headerLogoSmall}>Funiro.</div>
                <Image className={classes.menu} width={24} height={24} src={'/images/icons/menu.png'} alt={'menu'}/>
                <div className={classes.navButton}>
                    <div className={classes.headerLogo}>Funiro.</div>
                    <div className={classes.headerNav}>
                        {navMenu.map((item) => (
                                <div key={item.id}>
                            <span className={classes.navName}>
                                {item.name}
                            </span>
                                    {item.subMenu?<Image src={item.icon} alt={'icon'} width={20} height={20}/>:'' }
                                </div>
                            )
                        )}
                    </div>
                    <div className={classes.headerSearch}>
                        <input type="search"
                               placeholder={'Search for minimalist chair'}
                        />
                        <Image width={20} height={20} alt={'icon'} src={'/images/icons/Search.svg'} />
                    </div>
                    <div className={classes.headerProfile}>
                        <Link href={'#'}>
                            <Image width={24} height={24} alt={'icon'} src={'/images/icons/Heart.svg'}/>
                        </Link>
                        <Link href={'#'}>
                            <Image width={24} height={24} alt={'icon'} src={'/images/icons/Cart.svg'}/>
                        </Link>
                        <Link href={'#'}>
                            <Image width={40} height={40} alt={'icon'} src={'/images/icons/Ellipse 2.svg'}/>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default TopNav;