import { useEffect } from 'react';
import styles from "./clientSpeak.module.scss";

export default function ClientSpeakSection() {

    return(
       <div className={styles.clientBlock}>
           <div className={`container`}>
               <div className={`row`}>
                   <div className={`col-12`}>
                       <h1>Client Speaks</h1>
                   </div>
               </div>
               <div className={`row justify-content-center align-items-center`}>
                   <div className={`col-6`}>
                       <h5>
                           Altran has been working with NetiApps for a number of years now and we are very pleased with the dedication and responsiveness of the NetiApps team. NetiApps is a much valued vendor/partner, who go out of their way to meet deadlines and provide solutions. The NetiApps culture of ingenuity, positive attitude and commitment to the task at hand is much appreciated. We look forward to a long and fruitful relationship.
                       </h5>
                       <div className={styles.img}>
                           <img src={`/images/client1.png`} />
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}