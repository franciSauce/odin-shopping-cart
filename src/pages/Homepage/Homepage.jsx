import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
    const imagesSizes = [
        '750x250', '250x500', '250x500', '250x250', '250x500',
        '250x500', '250x250', '250x500', '500x250', '750x250'
    ];

    return (
        <div className={styles.box}>
            <div className={styles.hero}>
                <div>Lorem ipsum dolor sit amet</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui</p>
                <Link to='/shop'>See Products</Link>
            </div>
            <div className={styles.imageGrid}>
                {imagesSizes.map(imageSize => <div><img src={`https://dummyjson.com/images/${imageSize}`}/></div>)}
            </div>
        </div>
    )
}

export default Homepage