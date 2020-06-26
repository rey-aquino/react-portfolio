import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div className="fix-width">
        <div className="row banner-text">
          <div className="col-lg-5 m-t-40">
            <h1>
              HELLO, I'M
              <span
                className="text-info display-3"
                style={{ marginLeft: '-5px' }}
              >
                REY AQUINO
              </span>
            </h1>
            <h4 className="font-500">Front-End &amp; Back End Developer</h4>
            <div className="down-btn m-t-20">
              <a
                href="mailto:includeiostreamsharp@gmail.com"
                className="btn btn-info btn-rounded m-b-10"
              >
                CONTACT ME
              </a>
              <a
                href="https://drive.google.com/file/d/1B6rGAGYwODXPX5LszrzL68U5I5CAj1KO/view?usp=sharing"
                className="btn btn-success btn-rounded m-b-10"
                target="_blank"
              >
                SEE MY RESUME
              </a>
            </div>
            <div className="m-t-40">
              <div className="round align-self-center round-info m-t-40">
                <a
                  href="https://www.facebook.com/rey.aquino.969952"
                  target="_blank"
                >
                  <i className="ti-user" />
                </a>
              </div>
              <div className="round align-self-center round-info m-t-40">
                <a
                  href="https://www.linkedin.com/in/rey-aquino-39000618a/"
                  target="_blank"
                >
                  <i className="ti-user" />
                </a>
              </div>
              <div className="round align-self-center round-info m-t-40">
                <a href="https://github.com/rey-aquino" target="_blank">
                  <i className="ti-user" />
                </a>
              </div>
              <div className="round align-self-center round-info m-t-40">
                <a href target="_blank">
                  <i className="ti-user" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-banner">
              <img src="images/banner.jpg" alt="Material Pro admin template" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
