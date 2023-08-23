import React from 'react';
import classes from './Footer.module.css'
import Image from "next/image";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.funiro}>
                <div className={classes.descrName}>Funiro.</div>
                <div className={classes.descr}>Worldwide furniture store since <br/>2020. We sell over 1000+ branded<br/> products on our website</div>
                <div className={classes.descr}>
                    <Image className={classes.descrIcon} src={'/images/icons/Pin.svg'} alt={''} width={20} height={20}/>
                    <span>Sawojajar Malang, Indonesia</span>
                </div>
                <div className={classes.descr}>
                    <Image className={classes.descrIcon} src={'/images/icons/Phone.svg'} alt={''} width={20} height={20}/>
                    <span>+6289 456 3455</span>
                </div>
                <div className={classes.descr}>www.funiro.com</div>
            </div>
            <div className={classes.menu}>
                <div className={classes.descrName}>Menu</div>
                <div className={classes.descr}>Products</div>
                <div className={classes.descr}>Rooms</div>
                <div className={classes.descr}>Inspirations</div>
                <div className={classes.descr}>About Us</div>
                <div className={classes.descr}>Terms & Policy</div>
            </div>
            <div className={classes.account}>
                <div className={classes.descrName}>Account</div>
                <div className={classes.descr}>My Account</div>
                <div className={classes.descr}>My Cart</div>
                <div className={classes.descr}>Checkout</div>
                <div className={classes.descr}>My catalog</div>
            </div>
            <div className={classes.connect}>
                <div className={classes.descrName}>Stay Connected</div>
                <div className={classes.descr}>Facebook</div>
                <div className={classes.descr}>Instagram</div>
                <div className={classes.descr}>Twitter</div>
            </div>
            <div className={classes.update}>
                <div className={classes.descrName}>Stay Updated</div>
                <div className={classes.descr}>
                    <input placeholder={'Enter tour e-mail'} type="text"/>
                    <button>
                        <Image src={'/images/icons/fly.svg'} alt={''} width={24} height={24}/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Footer;