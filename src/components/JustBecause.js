import React, { Component } from 'react';
import swirl from '../assets/swirl.png';
import school from '../assets/school.png';
import scream from '../assets/scream.png';
import mask from '../assets/mask.png';
import goLong from '../assets/go-long.png';

class JustBecause extends Component {
  render() {
    return (
      <section className="just-because">
        <div>
          <img src={swirl} className='swirl' alt='swirling rotating background' />
        </div>
        <div>
        <img src={school} className='school' alt='at school way back when' />
        </div>
        <img src={scream} className="scream1" alt="I was a brat when i was younger" />
        <img src={scream} className="scream2" alt="I was a brat when i was younger" />
        <img src={scream} className="scream3" alt="I was a brat when i was younger" />
        <img src={mask} className="mask" alt="First halloween costume" />
        <img src={goLong} className="go-long" alt="my brother playing football" />
      </section>
    );
  }
}

export default JustBecause;
