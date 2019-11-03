import React from 'react';
import request from 'superagent';

import styles from './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [],
      err:''
    };
  }

  componentDidMount() {
    request.get(`/api/v1`).then(res => {
      this.setState({
        work: res.body.value,
      });
    });
  }

  render() {
    return (
      this.state.work.map(work => {
        return(
            <div className={styles.item}>
                <img
                    className={styles.image}
                    src={work.image}
                    alt=""
                ></img>
                <div className={styles.middle}>
                    <div className={styles.text}>
                    <p>{work.name}</p>
                    <p>{work.date}</p>
                    <p>{work.occupation}</p>
                    </div>
                </div>
            </div>
        )
      }) 
    );
  }
}

export default Index;
