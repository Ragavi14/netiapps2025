import { useEffect } from 'react';
import styles from "./contactForm.module.scss";

export default function ContactForm() {

    return(
        <div className={styles.contactForm}>
            <h3>Start a Project</h3>
            <div className={`container`}>
                <div className={`row justify-content-center align-content-center`}>
                    <div className={`col-6`}>
                        <div className={styles.Form}>
                            <h2>Get a free project quote today.</h2>
                        </div>

                        <div className={styles.formBlock}>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Company</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"  />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Contact</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Comments</label>
                                    <textarea  className={`${styles.height100} form-control`} />
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

                                <div className={`col-12`}>
                                    <h3>OR</h3>
                                </div>

                                <div className={`col-12`}>
                                    <p>Mail us your requirement to</p>
                                    <h4>manoj.p@netiapps.com</h4>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
