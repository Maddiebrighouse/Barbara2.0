import React from 'react';

import styles from './contact.css';

const Contact = () => {
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contact}>
        <img
          className={styles.contacttitle}
          src="./public/contact-title.svg"
          alt="Contact Header"
        />
        <img
          className={styles.needle}
          src="/Users/madeleinebrighouse/workspace/webpack-react-boilerplate/src/public/needle.svg"
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
