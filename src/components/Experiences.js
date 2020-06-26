import React, { Component } from 'react';

class Experiences extends Component {
  render() {
    return (
      <div>
        <div id="experiences" className="row light-blue">
          <div id="experiences" className="col-md-12">
            <div className="fix-width text-center">
              {/* <small class="text-info">ALMOST COVERED EVERYTHING</small> */}
              <h2 className="display-7">Work Experiences</h2>
              <div
                className="tesimonial-box owl-carousel owl-theme"
                id="owl-demo2"
              >
                <div className="item">
                  <p className="testimonial-text">
                    <b className="font-500">I.T Research Specialist</b>
                  </p>
                  <p>
                    I work as a third party remote home base. My job duties was
                    to research IBM server specs, EOL (End Of Life) and saved it
                    in excel file.
                  </p>
                  <p />
                  <div className="username">
                    <b>
                      IBM . Contract <br />
                      April 2017 - June 2017 . 3 mos
                      <br />
                      <small className="text-danger" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </b>
                  </div>
                </div>
                <div className="item">
                  <p className="testimonial-text">
                    <b className="font-500">Web Developer</b>
                  </p>
                  <p>
                    I took my Internship at GAPLABS. My job duties was to debug
                    and update old website issues.
                  </p>
                  <p />
                  <div className="username">
                    <b>
                      GoAbroad . Internship
                      <br />
                      May 2018 - Aug 2018 . 4 mos
                      <br />
                      <small className="text-danger">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </small>
                    </b>
                  </div>
                </div>
                <div className="item">
                  <p className="testimonial-text">
                    <b className="font-500">Web Developer</b>
                  </p>
                  <p>Something</p>
                  <p />
                  <div className="username">
                    <b>
                      Self Employed Web Developer and Consultant
                      <br />
                      2019-2020 . 1 yr
                      <br />
                      <small className="text-danger">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </small>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
