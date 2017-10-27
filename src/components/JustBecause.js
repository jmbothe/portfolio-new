import React, { Component } from "react";
import swirl from "../assets/swirl.png";
import school from "../assets/school.png";
import scream from "../assets/scream.png";
import mask from "../assets/mask.png";
import goLong from "../assets/go-long.png";

class JustBecause extends Component {
  render() {
    return (
      <section className="just-because">
        <div>
          <img src={swirl} className="swirl" alt="" />
        </div>
        <div>
          <img src={school} className="school" alt="" />
        </div>
        <img src={scream} className="scream1" alt="" />
        <img src={scream} className="scream2" alt="" />
        <img src={scream} className="scream3" alt="" />
        <img src={mask} className="mask" alt="" />
        <img src={goLong} className="go-long" alt="" />
      </section>
    );
  }
}

export default JustBecause;
