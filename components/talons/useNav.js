'use client'

import {useState} from "react";

export default () => {

    const [navMenu, setNavMenu] = useState([
        {id: 1, name: 'Products', icon: '/images/icons/Arrow-down.svg' , subMenu:[
                {id: 1.1, name: '...'},
                {id: 1.2, name: '...'},
                {id: 1.3, name: '...'},
            ]},
        {id: 2, name: 'Rooms', icon: '/images/icons/Arrow-down.svg', subMenu:[
                {id: 2.1, name: '...'},
                {id: 2.2, name: '...'},
                {id: 2.3, name: '...'},
            ]},
        {id: 3, name: 'Inspirations'},

    ])


    return {
        navMenu,
    }
}