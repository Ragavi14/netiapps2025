
import { useEffect, useRef } from 'react';
import styles from "./relatedSolutions.module.scss";
export default function RelatedSolutions() {

    return (
        <div>
            <div className={styles.relatedSolutions}>
                <div className={`container`}>
                    <div className={`row `}>
                        <div className={`col-md-12  `}>
                            <h2>Related <br/> <b>Software Development</b></h2>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={styles.cardSolutions}>
                                <h3>IOS App Development</h3>
                                <a href={`/`}><img src={`/images/more.svg`} /></a>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.cardSolutions}>
                                <h3>Hybrid App Development Services</h3>
                                <a href={`/`}><img src={`/images/more.svg`} /></a>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.cardSolutions}>
                                <h3>Android App Development Services </h3>
                                <a href={`/`}><img src={`/images/more.svg`} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
