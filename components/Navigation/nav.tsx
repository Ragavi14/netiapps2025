import { useEffect } from 'react';
import styles from "./nav.module.scss";

export default function Navigation() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return(
        <div>
            <div className={styles.nav}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-6`}>
                            <div className={styles.logo}><img src={`/images/logo.svg`} /> </div>
                        </div>
                        <div className={`col-6 text-end justify-content-end align-items-center d-flex`}>
                            <div className={styles.startBtn}><a href={`/`} className={`btn btn-light me-4`}>Start Project</a></div>
                            <a href={`/`} type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src={`/images/menu.svg`} />
                            </a>

                            <div className="offcanvas offcanvas-top bounce-in-bottom vh-100" tabIndex="-1" id="offcanvasTop"
                                 aria-labelledby="offcanvasTopLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel"></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body d-flex justify-content-center align-items-center">
                                   <div className={`container`}>
                                       <div className={styles.dropMenu}>
                                           <div className={`row text-start`}>
                                               <div className={`col-4`}>
                                                   <h4>About</h4>
                                                   <ul>
                                                       <li>About</li>
                                                       <li>Engagement Model</li>
                                                       <li>Development Process</li>
                                                       <li>Clients</li>
                                                       <li>Careers</li>
                                                       <li>Blogs</li>
                                                   </ul>
                                               </div>
                                               <div className={`col-4`}>
                                                   <h4>About</h4>
                                                   <ul>
                                                       <li>Android App Development</li>
                                                       <li>Drupal Development</li>
                                                       <li>Enterprise Software</li>
                                                       <li>Hybrid App Development</li>
                                                       <li>IoT App Development</li>
                                                       <li>Java Development</li>
                                                       <li>Laravel Development</li>
                                                   </ul>
                                               </div>
                                               <div className={`col-4`}>
                                                   <h4>About</h4>
                                                   <ul>

                                                       <li>CMS</li>
                                                       <li>CRM</li>
                                                       <li>ERP</li>
                                                       <li>eLearning</li>
                                                       <li>eCommerce</li>
                                                       <li>Web Portal</li>
                                                       <li>DMS</li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}