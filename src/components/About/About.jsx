import React from 'react';
import ReactSVG from 'react-svg'

import AboutImage from '../../public/about.svg';
import styles from './about.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <ReactSVG src={AboutImage} />
        <img className={styles.about_title} src={AboutImage} alt="Hand Written About Title" />
      </div>
      <div className={styles.about_container}>
        <div className={styles.about_info}>
          <p className={styles.text}>
            Barbara Darragh costume designer, has been a life time career
            Costuming actors for major New Zealand , US cable shows and
            international feature films ,plus many television commercials.
            Occasional stage productions She has several awards for costume
            design plus a Emmy nominations for Spartacus The last year has
            involved costume design for a Netflix project The Letter For The
            King ATB Costume Hire is an expanding business she also owns to
            facilitate industry designers and stylists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
