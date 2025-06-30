import { useEffect } from 'react';
import styles from "./footerBlock.module.scss";

export default function FooterBlock() {

    return(
       <div className={styles.footerBlock}>
         <div className={`container`}>
             <div className={styles.footerTop}>
                 <div className={`row justify-content-center align-self-end`}>
                     <div className={`col-md-6`}>
                         <h2>Digital Experiences<br/>
                             <b>Since 2006</b></h2>
                     </div>
                     <div className={`col-md-6 text-end`}>
                         <img src={`/images/more.svg`} /> Get free Proposal
                     </div>
                 </div>
             </div>
             <div className={styles.footerMiddle}>
                <div className={`row`}>
                    <div className={`col-md-8`}>
                        <h5>Solutions</h5>
                        <ul>
                            <li>Software Development</li>
                            <li>Website Development</li>
                            <li>Mobile Development</li>
                            <li>UI/UX Design</li>
                            <li>Cyber Security</li>
                            <li>Software Development</li>
                            <li>Website Development</li>
                            <li>Laravel Development</li>
                        </ul>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.address}>
                            <h5>Office Address</h5>
                            <p>India Office</p>
                            <p>No. 406, 9th Main Road, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka, India - 560 043.</p>
                            <p>Email: manoj.p@netiapps.com</p>
                        </div>

                        <div className={`d-flex justify-content-between `}>
                            <img src={`/images/icon-1.svg`} />
                            <img src={`/images/icon-2.svg`} />
                            <img src={`/images/icon-3.svg`} />
                        </div>

                    </div>
                </div>
             </div>
             <div className={styles.footerBottom}>
                 <p>2025 Netiapps Software Solutions. All Rights Reserved.</p>
             </div>
         </div>
       </div>
    )
}