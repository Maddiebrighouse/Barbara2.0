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
      <div className={styles.contactdetails}>
        <hr />
        <p className={styles.text}>
          Barbara Darragh contact barbara.darragh@gmail,com 6421948255 Gems
          Agency UK Jayne@gems-agency.co.uk
        </p>
      </div>
    </div>
  );
};

export default Contact;
