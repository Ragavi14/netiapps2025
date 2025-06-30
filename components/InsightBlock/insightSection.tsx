import { useEffect } from 'react';
import styles from "./insightSection.module.scss";

export default function InsightSection() {

    return(
       <div className={styles.insightSection}>
          <div className={styles.mainInsight}>
              <div className={`container`}>
                  <div className={`row`}>
                      <div className={`col-nd-6`}>
                          <h2>Latest Insight</h2>
                          <h2></h2>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    )
}