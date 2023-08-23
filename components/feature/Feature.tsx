'use client'

import React from 'react';
import classes from './Feature.module.css'
import Image from "next/image";
import features from '../talons/useFeature'
import useFeature from "../talons/useFeature";

const Feature = () => {

    const {features} = useFeature()

    return (
        <div className={classes.featureBlock}>
            {features.map(item => (
                <div key={item.id} className={classes.feature}>
                    <Image src={item.icon} alt={''} width={40} height={40}/>
                    <div className={classes.featureDescr}>
                        <div className={classes.name}>{item.name}</div>
                        <div className={classes.descr}>{item.descr}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feature;