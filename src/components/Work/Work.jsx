import React from 'react';
// import request from 'superagent';

import styles from './work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   request.get(`/api/v1/jobs`).then(res => {
  //     this.setState({
  //       jobs: res.body.jobs,
  //     });
  //   });
  // }

  render() {
    return (
      <div className={styles.work}>
        <div className={styles.container}>
          <img
            className={styles.border}
            src="../public/border.svg"
            alt="Boarder"
          />
          <div className={styles.item}>
            <img
              className=""
              src="https://m.media-amazon.com/images/M/MV5BZWIyMTA2M2ItOGI5MC00OTY0LWFmZTItN2NkOWQ0MGQ5NDkyL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
              alt=""
            ></img>
            <div className={styles.placeholder}>
              <p className={styles.text}>Placeholder shit</p>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className=""
              src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"
              alt=""
            ></img>
            <div className={styles.placeholder}>
              <p className={styles.text}>Placeholder shit</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
