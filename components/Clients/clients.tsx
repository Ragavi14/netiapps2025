import { useEffect } from 'react';
import styles from "./clients.module.scss";

export default function Clients() {

    return(
        <div className={styles.clientBlock}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-6`}>
                        <h2>Trusted by top-tier companies</h2>
                    </div>
                </div>
                <div className={`row w-75 justify-content-center align-items-center mx-auto`}>
                    <div className={`col`}><img src={`/images/client1.png`} /> </div>
                    <div className={`col`}><img src={`/images/client2.png`} /></div>
                    <div className={`col`}><img src={`/images/client3.png`} /></div>
                    <div className={`col`}><img src={`/images/client4.png`} /></div>
                    <div className={`col`}><img src={`/images/client5.png`} /></div>
                </div>
            </div>

        </div>
    )
}