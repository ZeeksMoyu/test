'use client'

import {useState} from "react";

export default () => {

    const [slide, setSlide] = useState([
        {id: 1, name: 'Bohauss', src: '/images/slider1.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
        {id: 2, name: 'Bohauss', src: '/images/slider2.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
        {id: 3, name: 'Bohauss', src: '/images/slider3.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },


    ])
    const [slideIns, setSlideIns] = useState([
            {id: 1, name: 'Bohauss', src: '/images/inspirations/sliderins1.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
            {id: 2, name: 'Bohauss', src: '/images/inspirations/sliderins2.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
            {id: 3, name: 'Bohauss', src: '/images/inspirations/sliderins3.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
            {id: 4, name: 'Bohauss', src: '/images/inspirations/sliderins3.png', descr: 'Luxury big sofa 2-seat', price: 'Rp 17.000.000', icon: '/images/icons/arrowRight.svg' },
        ])

    const [slideTips, setSlideTips] = useState([
        {id: 1, name: 'How to create a living room to love', src: '/images/tips/slidetips1.png', descr: '20 jan 2020'},
        {id: 2, name: 'Solution for clean look working space', src: '/images/tips/slidetips2.png', descr: '10 jan 2020'},
        {id: 3, name: 'Make your cooking activity more fun with good setup', src: '/images/tips/slidetips3.png', descr: '20 jan 2020'},
        {id: 4, name: 'How to create a living room to love', src: '/images/tips/slidetips1.png', descr: '20 jan 2020'},
        {id: 5, name: 'Solution for clean look working space', src: '/images/tips/slidetips2.png', descr: '10 jan 2020'},
        {id: 6, name: 'Make your cooking activity more fun with good setup', src: '/images/tips/slidetips3.png', descr: '20 jan 2020'},
    ])



    return {
        slide, slideIns, slideTips
    }
}