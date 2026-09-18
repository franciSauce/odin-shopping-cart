import { Link } from 'react-router-dom';
import sunriseImage from '../../assets/gallery-sunrise.svg';
import shapesImage from '../../assets/gallery-shapes.svg';
import orbitImage from '../../assets/gallery-orbit.svg';
import archImage from '../../assets/gallery-arch.svg';
import slicesImage from '../../assets/gallery-slices.svg';
import styles from './Homepage.module.css';

const Homepage = () => {
    const galleryImages = [
        { src: sunriseImage, alt: 'Sunrise over layered hills' },
        { src: shapesImage, alt: 'Colorful geometric shapes' },
        { src: orbitImage, alt: 'Orbiting circles' },
        { src: archImage, alt: 'Abstract arch' },
        { src: orbitImage, alt: 'Orbiting circles' },
        { src: shapesImage, alt: 'Colorful geometric shapes' },
        { src: archImage, alt: 'Abstract arch' },
        { src: orbitImage, alt: 'Orbiting circles' },
        { src: slicesImage, alt: 'Layered color slices' },
        { src: sunriseImage, alt: 'Sunrise over layered hills' },
    ];

    return (
        <div className={styles.box}>
            <div className={styles.hero}>
                <div>Lorem ipsum dolor sit amet</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui</p>
                <Link to='/shop'>See Products</Link>
            </div>
            <div className={styles.imageGrid}>
                {galleryImages.map(({ src, alt }, index) => <div key={`${src}-${index}`}><img src={src} alt={alt} /></div>)}
            </div>
        </div>
    )
}

export default Homepage