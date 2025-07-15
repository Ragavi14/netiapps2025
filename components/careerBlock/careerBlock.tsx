import { useEffect } from 'react';
import styles from "./careerBlock.module.scss";

export default function CareerBlock() {

    return(
        <div className={styles.careerBlock}>
            <div className={`container`}>
                <div className={`row justify-content-between`}>
                    <div className={`col-md-5`}>
                        <h3>Join the company with the bold new vision.</h3>
                    </div>
                    <div className={`col-md-4`}>
                        <p>At Netiapps, we’re shaping the AI industry. Join us to solve AI’s toughest challenges, building systems that see, hear, and understand like humans—unlocking new ways to communicate and create.</p>
                        <a className={styles.linkOutline} href={`/`}>career@netiapps.com</a>
                    </div>
                </div>

                <div className={`row py-5`}>
                    <div className={`col-md-4`}>
                        <div className={styles.cardJob}>
                            <div><img src={`/images/icon0.png`} /> </div>
                            <div><h2>Inspire Excellence</h2></div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.cardJob}>
                            <div><img src={`/images/icon0.png`} /> </div>
                            <div><h2>Inspire Excellence</h2></div>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.cardJob}>
                            <div><img src={`/images/icon0.png`} /> </div>
                            <div><h2>Inspire Excellence</h2></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.jobList}>
                <h5>Current Opening</h5>
                <div className={styles.jobCard}>
                    <h4>Sr. WordPress Developer <span>Onsite</span> </h4>
                    <div className={styles.location}>
                        <h3>Bangalore</h3>
                        <a href={`/`}>Apply Now</a>
                        <img src={`/images/more.svg`} />
                    </div>
                </div>
                <div className={styles.jobCard}>
                    <h4>Senior PHP Laravel Developer <span>Onsite</span> </h4>
                    <div className={styles.location}>
                        <h3>Bangalore</h3>
                        <a href={`/`}>Apply Now</a>
                        <img src={`/images/more.svg`} />
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <h4>Sr. Full Stack/Full Stack Developer <span>Onsite</span> </h4>
                    <div className={styles.location}>
                        <h3>Bangalore</h3>
                        <a href={`/`}>Apply Now</a>
                        <img src={`/images/more.svg`} />
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <h4>Business Analyst <span>Onsite</span> </h4>
                    <div className={styles.location}>
                        <h3>Bangalore</h3>
                        <a href={`/`}>Apply Now</a>
                        <img src={`/images/more.svg`} />
                    </div>
                </div>

                <div className={styles.jobCard}>
                    <h4>PHP Developer <span>Onsite</span> </h4>
                    <div className={styles.location}>
                        <h3>Bangalore</h3>
                        <a href={`/`}>Apply Now</a>
                        <img src={`/images/more.svg`} />
                    </div>
                </div>
            </div>

        </div>
    )
}
