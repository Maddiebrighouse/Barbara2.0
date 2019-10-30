import React from 'react';

import BarbaraFace from '../../public/barbara.svg';
import styles from './homepage.css';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <svg src={BarbaraFace}></svg>
      <svg src="../../public/barbara.svg"></svg>
      <img
        className={styles.mainImage}
        src="../../public/barbara.svg"
        alt="Sketch of Barbara"
      />
      <img
        className={styles.mainTitle}
        src="../public/barbara_title.svg"
        alt="Title Barbara Darragh"
      />
      <div className={styles.lucy}>
        <p className={styles.text}>Image inspired by Lucy Danner</p>
      </div>
    </div>
  );
};

export default Homepage;
