'use client'

import {useState} from "react";

export default () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Syltherine',
            icon: '/images/icons/discount.svg',
            descr: 'Stylish cafe chair',
            image: '/images/products/image1.png',
            currentPrice: 'Rp 2.500.000',
            oldPrice: 'Rp 3.500.000',
            newDiscount: '-30%',
        },
        {
            id: 2,
            name: 'Leviosa',
            icon: '',
            descr: 'Stylish cafe chair',
            image: '/images/products/image2.png',
            currentPrice: 'Rp 2.500.000',
            oldPrice: '',
            newDiscount: '',
        },
        {
            id: 3,
            name: 'Lolito',
            icon: '/images/icons/discount.svg',
            descr: 'Luxury big sofa',
            image: '/images/products/image3.png',
            currentPrice: 'Rp 7.000.000',
            oldPrice: 'Rp 14.000.000',
            newDiscount: '-50%',
        },
        {
            id: 4,
            name: 'Respira',
            icon: '/images/icons/new.svg',
            descr: 'Minimalist fan',
            image: '/images/products/image4.png',
            currentPrice: 'Rp 500.000',
            oldPrice: '',
            newDiscount: 'New',
        },
        {
            id: 5,
            name: 'Muggo',
            icon: '/images/icons/new.svg',
            descr: 'Small mug',
            image: '/images/products/image5.png',
            currentPrice: 'Rp 150.000',
            oldPrice: '',
            newDiscount: 'New',
        },
        {
            id: 6,
            name: 'Grifo',
            icon: '',
            descr: 'Night lamp',
            image: '/images/products/image6.png',
            currentPrice: 'Rp 1.500.000',
            oldPrice: '',
            newDiscount: '',
        },
        {
            id: 7,
            name: 'Pingky',
            icon: '/images/icons/discount.svg',
            descr: 'Cute bed set',
            image: '/images/products/image7.png',
            currentPrice: 'Rp 7.000.000',
            oldPrice: 'Rp 14.000.000',
            newDiscount: '-50%',
        },
        {
            id: 8,
            name: 'Potty',
            icon: '/images/icons/new.svg',
            descr: 'Minimalist flower pot',
            image: '/images/products/image8.png',
            currentPrice: 'Rp 500.000',
            oldPrice: '',
            newDiscount: 'New',
        },



    ])


    return {
        products,
    }
}