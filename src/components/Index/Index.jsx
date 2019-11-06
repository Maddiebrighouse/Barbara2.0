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
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              } 
            },
            {
                breakpoint: 414,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false
                } 
              }
          ]
      };
    
    return (
        <Slider {...settings}>{this.state.work.map(work => {
            return(
                <a href={work.link} key={work._id} target="_blank">
                    <div className={styles.item}>
                        <img
                            className={styles.image}
                            src={work.image}
                            alt={`Image of the ${work.category} ${work.name}`}
                        ></img>
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                            <h1 className={styles.header}>{work.name}</h1>
                            <h3 className={styles.category}>{work.category}</h3>
                            <h3 className={styles.episode}>{work.episode}</h3>
                            <Moment format="YYYY" withTitle className={styles.date}>{work.date}</Moment> 
                            <p className={styles.occupation}>{work.occupation}</p>
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
