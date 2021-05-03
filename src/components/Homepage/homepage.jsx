import React from "react";
import styles from "./homepage.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <img
        className={styles.mainImage}
        src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1572477393/Barbara%27s%20Website/barbara_qnwrgk.svg"
        alt="Sketch/Link drawing of Barbara Darragh, like a sribble outlink of her face"
      />
      <img
        className={styles.mainTitle}
        src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1573080094/Barbara%27s%20Website/Barbara-Darragh-Title_bgcgdz.svg"
        alt="Hand written title saying Barbara Darragh"
      />
      <div className={styles.lucy}>
        <a className={styles.link} href="https://www.instagram.com/madeleinebrighouse/" target="_blank">Illustration by Madeleine Brighouse-Mayo</a>
        <p className={styles.text}>Inspired by Lucy Danner</p>
      </div>
    </div>
  );
};

export default Homepage;
