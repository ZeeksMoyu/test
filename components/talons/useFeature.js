'use client'

import {useState} from "react";

export default () => {

    const [features, setFeatures] = useState([
        {id: 1, name: 'High Quality', icon: '/images/icons/trophy.svg', descr: 'crafted from top materials'},
        {id: 2, name: 'Warrany Protection', icon: '/images/icons/guarantee.svg', descr: 'Over 2 years'},
        {id: 3, name: 'Free Shipping', icon: '/images/icons/shipping.svg', descr: 'Order over 150 $'},
        {id: 4, name: '24 / 7 Support', icon: '/images/icons/customer-support.svg', descr: 'Dedicated support'},


    ])


    return {
        features,
    }
}