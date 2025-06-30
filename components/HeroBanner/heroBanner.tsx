'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from "./heroBanner.module.scss";

export default function HeroBanner() {
    const headingRef = useRef(null); // Only on h1

    useEffect(() => {
        if (headingRef.current) {
            const lines = headingRef.current.querySelectorAll('span');

            gsap.fromTo(
                lines,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out'
                }
            );
        }
    }, []);

    return (
        <div>
            <div className={styles.heroBanner}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center vh-100`}>
                        <div className={`col-8`}>
                            <h1 ref={headingRef}>
                                <span>Expert Software Consulting</span>
                                <span>& Development to Drive</span>
                                <span>Your Digital Success</span>
                            </h1>
                            <a href={`/`} className={`btn btn-light`}>Read More</a>
                        </div>
                        <div className={`col-4`}>
                            <div className={styles.badge}>
                                <div className={styles.img}>
                                    <img src={`/images/badge.svg`} />
                                </div>
                                <p>Experience in Software Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
