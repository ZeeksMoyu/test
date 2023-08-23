'use client'

import React, {useCallback, useRef} from 'react';
import classes from './Tips.module.css'
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, FreeMode, Navigation, Pagination, Scrollbar} from "swiper/modules";
import useSlider from "@/components/talons/useSlider";

const Tips = () => {

    const {slideTips} = useSlider()

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper?.slideNext();
    }, []);

    return (
        <div className={classes.tips}>
            <h2 className={classes.title}>Tips & Tricks</h2>
            <div className={classes.tipsBlock}>
                <Swiper
                    ref={sliderRef}
                    className={classes.slider}
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                >
                    {slideTips.map(item =>(
                        <SwiperSlide key={item.id} className={classes.slide}>
                            <Image className={classes.image} width={391} height={251} alt={'photo'} src={item.src}/>
                            <div className={classes.descr}>
                                <h5 className={classes.tipsName}>{item.name}</h5>
                                <div className={classes.tipsDescr}>{item.descr}</div>
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
    );
};

export default Tips;