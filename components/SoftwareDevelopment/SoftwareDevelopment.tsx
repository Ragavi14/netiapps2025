import React, {useEffect} from "react";
import styles from './SoftwareDevelopment.module.scss';
import ScrollSpy from 'bootstrap/js/dist/scrollspy'; // 👈 Import this


const services = [
    {
      title: 'Custom Software Development',
      desc: 'Tailored software solutions to meet your specific business needs.',
      icon: '🧑‍💻',
    },
    {
      title: 'Enterprise Application Development',
      desc: 'Enterprise-grade solutions for scalability and performance.',
      icon: '🏢',
    },
    {
      title: 'Web Application Development',
      desc: 'Scalable and secure web apps tailored for modern businesses.',
      icon: '🖥️',
    },
    {
      title: 'IoT Solutions Development',
      desc: 'Build smart connected systems with our IoT expertise.',
      icon: '📡',
    },
    {
      title: 'Cloud Integration & Migration',
      desc: 'Securely integrate or migrate your systems to the cloud.',
      icon: '☁️',
    },
    {
      title: 'API Development & Integration',
      desc: 'Power your apps with custom APIs and integrations.',
      icon: '🔌',
    },
    {
      title: 'Agile & DevOps Consulting',
      desc: 'Optimize processes with agile and DevOps methodologies.',
      icon: '⚙️',
    },
    {
      title: 'Software Testing & Quality Assurance',
      desc: 'Ensure high quality with our QA and testing services.',
      icon: '🧪',
    },
  ];
  
  

export default function SoftwareDevelopment() {
    useEffect(() => {
        // Only run on client
        if (typeof window !== 'undefined') {
          import('bootstrap/js/dist/scrollspy').then((ScrollSpyModule) => {
            const ScrollSpy = ScrollSpyModule.default;
            new ScrollSpy(document.body, {
              target: '#scrollspyMenu',
              offset: 80,
            });
          });
        }
      }, []);

    return(
        <div className={styles.softwareSection}>
            <div className={`container ${styles.wrapper}`}>
                <div className="row">
                    <div className="col-md-6 position-sticky top-0" style={{ height: '100vh' }}>
                        <nav id="scrollspyMenu" className="nav flex-column py-5">
                            <div className={styles.leftPanel}>
                                <h2>Software Development</h2>
                                <p>Transform your business with innovative, tailored software development.</p>
                            </div>
                        </nav>
                    </div>
        
                    <div className="col-md-6">
                        <div className={styles.cardList}>
                            {services.map((service, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={`${styles.icon} `}>
                                        <h3>{service.title}</h3>
                                        <div className={`${styles.Image}`}><img src="/images/icon.png"/></div>
                                    </div>
                                    <p>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}