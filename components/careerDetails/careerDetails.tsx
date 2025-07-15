import { useEffect } from 'react';
import styles from "./careerDetails.module.scss";

export default function CareerDetails() {

    return(
        <div className={styles.careerDetails}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <div className={styles.arrowBack}>
                        <img src={`/images/more.svg`} /> Back to Career
                    </div>
                </div>
                <div className={`row justify-content-between`}>
                    <div className={`col-md-6`}>
                        <div className={styles.careerContent}>
                            <h2>Sr. WordPress Developer</h2>
                            <p><b>Position:</b> Sr. WordPress Developer</p>
                            <p><b>Qualification:</b> UG:B.E/B.Tech(Computers), MCA, MTech Computers</p>
                            <p><b>Experience required:</b> 6-12 Years of Experience</p>
                            <h3>Responsibilities</h3>

                            <ul>
                                <li>Build and customize WordPress websites.</li>
                                <li>Integrate Figma/Sketch or design files into WordPress theme.</li>
                                <li>Build and customize WordPress plugins.</li>
                                <li>Optimize the website for good website performance.</li>
                                <li>Ensure good website security.</li>
                                <li>Find opportunities to improve current systems or patterns through auditing or benchmarking.</li>
                                <li>‘Own’ and take lead in newly developed features for current or next generation platforms.</li>
                            </ul>


                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.formBlock}>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"  />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Contact</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Upload CV</label>
                                    <input type="file" className={`form-control`} />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Recaptcha
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
