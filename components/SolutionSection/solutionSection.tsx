import { useEffect } from 'react';
import styles from "./solutionSection.module.scss";

export default function SolutionSection() {

    return(
        <div className={styles.solutionBlock}>
            <div className={``}>
                <div className={`row`}>
                    <div className={`col-6 mx-auto text-center`}>
                        <h2>Expert Software Consulting & Development to Drive Your Digital Success</h2>
                    </div>
                </div>
                    <div className={styles.scrollBlock}>
                        <div className={styles.track}>
                            <div className={styles.card}>
                                <div>
                                    <h3>Software Development</h3>
                                </div>
                                <div>
                                    <img src={`/images/soft.png`}/>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <h3>Software Development</h3>
                                </div>
                                <div>
                                    <img src={`/images/soft.png`}/>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <h3>Software Development</h3>
                                </div>
                                <div>
                                    <img src={`/images/soft.png`}/>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <h3>Software Development</h3>
                                </div>
                                <div>
                                    <img src={`/images/soft.png`}/>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div>
                                    <h3>Software Development</h3>
                                </div>
                                <div>
                                    <img src={`/images/soft.png`}/>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <h3>Software Development</h3>
                            </div>
                            <div className={styles.card}>
                                <h3>Software Development</h3>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}