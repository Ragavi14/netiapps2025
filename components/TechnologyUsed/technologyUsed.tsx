
import { useEffect, useRef } from 'react';
import styles from "./technologyUsed.module.scss";
export default function TechnologyUsed() {

    return (
        <div>
            <div className={styles.technologyUsed}>
                <div className={`container`}>
                    <div className={`row `}>
                        <div className={`col-md-8 mx-auto text-center`}>
                            <h2>Technologies Used for <br/> <b>Custom Software Development</b></h2>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`col`}>
                            <div className={styles.iconCard}>
                                <img src={`/images/icon1.png`} />
                            </div>
                        </div>
                        <div className={`col`}>
                            <div className={styles.iconCard}>
                                <img src={`/images/icon2.png`} />
                            </div>
                        </div>
                        <div className={`col`}>
                            <div className={styles.iconCard}>
                                <img src={`/images/icon3.png`} />
                            </div>
                        </div>
                        <div className={`col`}>
                            <div className={styles.iconCard}>
                                <img src={`/images/icon4.png`} />
                            </div>
                        </div>
                        <div className={`col`}>
                            <div className={styles.iconCard}>
                                <img src={`/images/icon5.png`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
