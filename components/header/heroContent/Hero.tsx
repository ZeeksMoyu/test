'use client'

import React, {useCallback, useRef, useState} from 'react';
import classes from './Hero.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import ImageHeader from "@/components/header/imageGallery/ImageHeader";
import useSlider from '../../talons/useSlider'


const Hero = () => {

    const {slide} = useSlider()

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className={classes.containerSlider}>
            <ImageHeader/>
            <Swiper
                style={{overflow: 'visible'}}
                ref={sliderRef}
                className={classes.slider}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                spaceBetween={32}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{ clickable: true }}
            >
                {slide.map(item =>(
                    <SwiperSlide key={item.id} className={classes.slide}>
                        <Image className={classes.image} width={934} height={553} alt={'photo'} src={item.src}/>
                        <div className={classes.sliderDescr}>
                            <h4 className={classes.slideDescr1}>{item.name}</h4>
                            <span className={classes.slideDescr2}>{item.descr}</span>
                            <span className={classes.slideDescr3}>
                            <span>{item.price}</span>
                            <Image className={classes.arrow} src={item.icon} alt={'icon'} width={24} height={24} />
                        </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={classes.sliderNav + " " + classes.sliderNavLeft}>
                <Image src={'/images/icons/Left.svg'} alt={'icon'} width={24} height={24} className="prev-arrow" onClick={handlePrev}/>
            </div>
            <div className={classes.sliderNav + " " + classes.sliderNavRight}>
                <Image src={'/images/icons/Right.svg'} alt={'icon'} width={24} height={24} className="next-arrow" onClick={handleNext} />
            </div>


        </div>
    );
};

export default Hero;