'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from "./caseStudy.module.scss";

export default function CaseStudy() {
    return (
        <div className={styles.caseStudy}>
          <div className={`container`}>
              <div className={`row`}>
                  <div className={`col-6`}>
                      <h2>Case Study</h2>
                  </div>
              </div>
          </div>
            <div className={`${styles.caseStudyBlock} ${styles.case1}`}>
                <div className={`container`}>
                    <div className={`row align-items-center h-100`}>
                        <div className={`col-6`}>
                            <h2>Document Lifecycle and Workflow Management</h2>
                            <h3>96%</h3>
                            <p>Work made easy</p>
                            <a className={`btn btn-primary`} href={`/`}>View Casestudy</a>
                        </div>
                        <div className={`col-6`}>
                            <img src={`/images/document.png`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.caseStudyBlock} ${styles.case2}`}>
                <div className={`container`}>
                    <div className={`row align-items-center h-100`}>
                        <div className={`col-6`}>
                            <h2>Document Lifecycle and Workflow Management</h2>
                            <h3>96%</h3>
                            <p>Work made easy</p>
                            <a className={`btn btn-primary`} href={`/`}>View Casestudy</a>
                        </div>
                        <div className={`col-6`}>
                            <img src={`/images/dtdc.png`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.caseStudyBlock} ${styles.case3}`}>
                <div className={`container`}>
                    <div className={`row align-items-center h-100`}>
                        <div className={`col-6`}>
                            <h2>Document Lifecycle and Workflow Management</h2>
                            <h3>96%</h3>
                            <p>Work made easy</p>
                            <a className={`btn btn-primary`} href={`/`}>View Casestudy</a>
                        </div>
                        <div className={`col-6`}>
                            <img src={`/images/ngo.png`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
