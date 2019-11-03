import React from 'react';

import Index from '../Index/Index'
import styles from './work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.work}>
        <div className={styles.container}>
          <Index /> 
        </div>
      </div>
    );
  }
}

export default Work;
