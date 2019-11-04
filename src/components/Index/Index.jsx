import React from 'react';
import request from 'superagent';
import Moment from 'react-moment'
import Slider from 'react-slick'

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
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
      };
    
    return (
        <Slider {...settings}>{this.state.work.map(work => {
            return(
                <a href={work.link} key={work._id} target="_blank">
                    <div className={styles.item}>
                        <img
                            className={styles.image}
                            src={work.image}
                            alt=""
                        ></img>
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                            <h1>{work.name}</h1>
                            <h3 className={styles.category}>{work.category}</h3>
                            <Moment format="YYYY" withTitle>{work.date}</Moment> 
                            <p>{work.occupation}</p>
                            </div>
                        </div>
                    </div>
                </a>
            )
          }) }</Slider>
    );
  }
}

export default Index;
