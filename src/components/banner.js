import React, { Component } from "react";
import Img from "gatsby-image";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container" >
          <div className="banner-details" style={{"visibility":"hidden"}}>
            <h1 >Hi, I'm Chris.</h1>
            <span>I'm a tax attorney who helps small businesses.</span>
          </div>
        </div>
      </div>
    );
  }
}
