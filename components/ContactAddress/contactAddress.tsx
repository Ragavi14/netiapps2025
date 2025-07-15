import { useEffect } from 'react';
import styles from "./contactAddress.module.scss";

export default function ContactAddress() {

    return(
        <div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-4`}>
                        <div className={styles.addressCard}>
                            <img src={`/images/india.svg`} width={`159px`} />
                            <h2>India</h2>
                            <p>No. 406, 9th Main Road, HRBR Layout 1st Block, Kalyan Nagar, Bangalore, Karnataka, India - 560 043.</p>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.addressCard}>
                            <img src={`/images/usa.svg`} width={`140px`} />
                            <h2>USA</h2>
                            <p>44 Court St #1217 #1020 Brooklyn, NY 11201 <br/>
                                Phone : (315) 291-8670 <br/>
                                Fax : (315) 279-3373</p>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.addressCard}>
                            <img src={`/images/singapore.svg`}  width={`90px`} />
                            <h2>Singapore</h2>
                            <p>No 7 Temasek Boulevard #12-07 PMB1157 Suntec Tower One Singapore, 038987</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
