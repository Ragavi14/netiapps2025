import { useEffect } from 'react';
import styles from "./insightSection.module.scss";

export default function InsightSection() {

    return(
       <div className={styles.insightSection}>
          <div className={styles.mainInsight}>
              <div className={`container h-100`}>
                  <div className={`row h-100`}>
                      <div className={`col-md-6`}>
                          <div className={`d-flex flex-column justify-content-between h-100`}>
                              <h2>Latest Insight</h2>
                              <div className={styles.bottomContent}>
                                  <p>23 February 2024</p>
                                  <h4>15 Reasons Why Shopify is the Best Ecommerce Platform</h4>
                                  <a href={`/`}> <img src={`/images/more.svg`} /> </a>
                              </div>
                          </div>
                      </div>
                      <div className={`col-md-6`}>
                          <div className={styles.img}>
                                <img src={`/images/hand.png`} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
           <div className={styles.bottomInsight}>
               <div className={`container`}>
                   <div className={`row`}>
                       <div className={`col-md-6`}>
                           <div className={styles.insightBlock}>
                               <div className={`row justify-content-center align-items-center`}>
                                   <div className={`col`}> <h5>23 February 2024</h5></div>
                                      <div className={`col text-end`}>
                                          <div className={styles.more}>
                                          <img src={`/images/more.svg`} />
                                         </div>
                                     </div>
                               </div>
                               <h3>15 Reasons Why Shopify is the Best Ecommerce Platform</h3>
                           </div>
                       </div>
                       <div className={`col-md-6`}>
                           <div className={styles.insightBlock}>
                               <div className={`row justify-content-center align-items-center`}>
                                   <div className={`col`}> <h5>23 February 2024</h5></div>
                                   <div className={`col text-end`}>
                                       <div className={styles.more}>
                                           <img src={`/images/more.svg`} />
                                       </div>
                                   </div>
                               </div>
                               <h3>15 Reasons Why Shopify is the Best Ecommerce Platform</h3>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}