import React from 'react';
import moment from 'moment';
import Slider from 'react-slick';

import styles from './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [],
      err: '',
    };
  }

  componentDidMount() {
    fetch('/api/v1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          work: data.value,
        });
      })
      .catch(() => {
        this.setState({ err: 'Could not load work' });
      });
  }

  render() {
    const settings = {
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
            dots: true,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 675,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        {this.state.work.map(work => (
          <a
            href={work.link}
            key={work._id}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.item}>
              <img
                className={styles.image}
                src={work.image}
                alt={`Movie poster of the ${work.category} ${work.name}`}
              />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  <h1 className={styles.header}>{work.name}</h1>
                  <h3 className={styles.category}>{work.category}</h3>
                  <h3 className={styles.episode}>{work.episode}</h3>
                  <time
                    className={styles.date}
                    dateTime={work.date}
                    title={work.date}>
                    {moment(work.date).format('YYYY')}
                  </time>
                  <p className={styles.occupation}>{work.occupation}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    );
  }
}

export default Index;