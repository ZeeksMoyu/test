import React from 'react';
import classes from './Share.module.css'

const Share = () => {
    return (
        <>
            <div className={classes.share}>
                <div className={classes.descr}>Share your setup with</div>
                <div className={classes.name}>#FuniroFurniture</div>
            </div>
            <hr className={classes.hr}/>
        </>
    );
};

export default Share;