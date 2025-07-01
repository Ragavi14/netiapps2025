
import { useEffect, useRef } from 'react';
import styles from "./innerBanner.module.scss";

export default function InnerBanner() {

    return (
        <div>
            <div className={styles.innerBanner}>
                <div className={`container h-100`}>
                    <div className={`row justify-content-center align-content-center h-100`}>
                        <div className={`col-md-6`}>
                            <div className={styles.headingContent}>
                                <h2>Expert Solutions <span>Designed</span></h2>
                                <p>Home / Software Development / Custom Software Development</p>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.image}>
                                <img src={`/images/gear.png`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
