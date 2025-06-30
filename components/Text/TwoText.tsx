import React from "react";
import styles from './Text.module.scss';

export default function TwoText() {
    return(
        <div className={styles.TwoText}>
            <div className="container">
                <div className=" d-flex row" style={{gap: '40px'}}>
                    <div className={`${styles.card} col-md-6`}>
                        <p>23 February 2024 <img src="/images/arrow.png" /> </p>
                        <h5>15 Reasons Why Shopify is the Best Ecommerce Platform</h5>
                    </div>
                    <div className={`${styles.card} col-md-6`}>
                        <p>23 February 2024 <img src="/images/arrow.png" /> </p>
                        <h5>15 Reasons Why Shopify is the Best Ecommerce Platform</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}