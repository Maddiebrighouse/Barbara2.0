import React from 'react';

import styles from './contact.css';

const Contact = () => {
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contact}>
        <img
          className={styles.contacttitle}
          src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1572477395/Barbara%27s%20Website/contact-title_s29ye8.svg"
          alt="Contact Header"
        />
        <img
          className={styles.needle}
          src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1572477395/Barbara%27s%20Website/needle_zcgofg.svg"
          alt="Drawing of a needle"
        />
      </div>
      <hr className={styles.hr1} />
      <div className={styles.contactdetails}>
          <h3 className={styles}>
            Barbara Darragh 
          </h3>
          <a className={styles.a} href="mailto:barbara.darragh@gmail.com">barbara.darragh@gmail.com</a>
          <p className={styles.text}>
            6421948255 
          </p>
          <h3 className={styles}>
              Gems Agency UK 
          </h3>
          <a className={styles.a} href="mailto:Jayne@gems-agency.co.uk">Jayne@gems-agency.co.uk</a>
          <hr className={styles.hr2} />
          <img
            className={styles.needle2}
            src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1572477395/Barbara%27s%20Website/needle_zcgofg.svg"
            alt="Drawing of a needle"
          />
      </div>
    </div>
  );
};

export default Contact;
