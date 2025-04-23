import React, { useEffect, useRef, useState } from 'react';
import './Header.css';

import img1 from '../../assets/header_img1.png';
import img2 from '../../assets/header_img2.png';
import img3 from '../../assets/header_img3.png';
import img4 from '../../assets/header_img4.png';
import img5 from '../../assets/header_img5.png';
import img6 from '../../assets/header_img6.png';

export const Header = () => {
    const images = [img6, img3, img4, img1, img2, img5];
    const extendedImages = [...images, images[0]]; // Add cloned first image
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle transition end
    useEffect(() => {
        const handleTransitionEnd = () => {
            if (currentIndex === images.length) {
                // Reached clone — jump to real first
                setTransitionEnabled(false);
                setCurrentIndex(0);
            }
        };

        const slider = sliderRef.current;
        slider.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            slider.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex, images.length]);

    // Re-enable transition on index change
    useEffect(() => {
        if (!transitionEnabled) {
            const timeout = setTimeout(() => {
                setTransitionEnabled(true);
            }, 20); // slight delay to ensure reset before next transition
            return () => clearTimeout(timeout);
        }
    }, [transitionEnabled]);

    return (
        <div className="header-slider">
            <div
                className="slider-track"
                ref={sliderRef}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: transitionEnabled ? 'transform 1s ease-in-out' : 'none',
                }}
            >
                {
                    extendedImages.map((img, idx) => (
                        <div className="slide" key={idx}>
                            <img src={img} alt={`slide-${idx}`} className="slide-image" />
                            <div className="header-content">
                                <h2>Order Your Favourite Food Here</h2>
                                <p>Choose a diverse menu featuring world-class food</p>
                                 <a href="#explore-menu" className="header-button"><button> View Menu </button> </a> 
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
