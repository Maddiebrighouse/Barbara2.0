import React from "react";

import Index from "../Index/Index";
import styles from "./work.css";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.work}>
        <img
          className={styles.worktitle}
          src="https://res.cloudinary.com/madeleinebrighouse/image/upload/v1573022283/Barbara%27s%20Website/work_m1wshf.svg"
          alt="Contact Header"
        />
        <div className={styles.container}>
          <Index />
        </div>
      </div>
    );
  }
}

export default Work;
