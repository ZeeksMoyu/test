'use client'

import React, {useCallback, useRef} from 'react';
import classes from './Inspirations.module.css'
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import useSlider from "@/components/talons/useSlider";

const Inspirations = () => {

    const {slideIns} = useSlider()

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper?.slideNext();
    }, []);

    return (
        <div className={classes.inspirations}>
            <div className={classes.inspBg}></div>
            <div className={classes.inspContent}>
                <div className={classes.inspDescrBlock}>
                    <div className={classes.mask}></div>
                    <div className={classes.inspDescr}>
                        <div className={classes.title}>50+ Beautiful rooms
                            inspiration</div>
                        <div className={classes.descr}>Our designer already made a lot of beautiful prototype of rooms that inspire you</div>
                        <div className={classes.button}>Explore More</div>
                    </div>
                </div>

                <div className={classes.inspSlider}>
                    <Swiper
                        style={{overflow: 'visible'}}
                        ref={sliderRef}
                        className={classes.slider}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                        spaceBetween={32}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                    >
                        {slideIns.map(item =>(
                            <SwiperSlide key={item.id} className={classes.slide}>
                                <Image width={404} height={582} alt={'photo'} src={item.src}/>
                                <div className={classes.sliderDescr}>
                                    <h4 className={classes.slideDescr1}>{item.name}</h4>
                                    <span className={classes.slideDescr2}>{item.descr}</span>
                                    <span className={classes.slideDescr3}>
                            <span>{item.price}</span>
                                <Image src={item.icon} alt={'icon'} width={24} height={24} />
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
            </div>
        </div>
    );
};

export default Inspirations;