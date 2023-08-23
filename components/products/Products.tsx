'use client'

import React from 'react';
import classes from './Products.module.css'
import Image from "next/image";
import useProducts from '../talons/useProducts'
import Link from "next/link";

const Products = () => {

    const {products} = useProducts()

    return (
        <div className={classes.productBlock}>
            <h2 className={classes.title}>Our Products</h2>
            <div className={classes.productsGallery}>
                {products.map(item =>(
                    <div key={item.id}>
                        <div className={classes.productCard}>
                            <div className={classes.cardHover}>
                                <Link href={'#'}>Add to cart</Link>
                                <div className={classes.interaction}>
                                    <Link href={'#'} className={classes.share}>
                                        <Image src={'/images/icons/share.svg'} alt={''} width={24} height={24}/>
                                        <span>Share</span>
                                    </Link>
                                    <Link href={'#'} className={classes.heart}>
                                        <Image src={'/images/icons/HeartWhite.svg'} alt={''} width={24} height={24}/>
                                        <span>Like</span>
                                    </Link>
                                </div>
                            </div>
                            {item.icon ?
                                <div className={classes.iconDiscount}>
                                    <Image src={item.icon} alt={''} width={48} height={48}/>
                                    <span>{item.newDiscount}</span>
                                </div> :
                                <></>}
                            <Image src={item.image} alt={item.name} width={285} height={301}/>
                            <div className={classes.productDescr}>
                                <h5 className={classes.productName}>{item.name}</h5>
                                <div className={classes.sortDescr}>{item.descr}</div>
                                <div className={classes.price}>
                                    <div className={classes.currentPrice}>{item.currentPrice}</div>
                                    <div className={classes.oldPrice}>{item.oldPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <button className={classes.showMore}>Show More</button>
        </div>
    );
};

export default Products;