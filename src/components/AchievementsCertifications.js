import React, { Component } from 'react';

class AchievementsCertifications extends Component {
  render() {
    return (
      <div>
        <div className="row white-space">
          <div id="about" className="col-md-12">
            <div className="text-center">
              <h1>Achievements &amp; Certifications</h1>
            </div>
            <div className="fix-width icon-section m-t-40">
              <div className="row m-t-40">
                <div className="col-lg-3 col-md-6 text-center">
                  <img
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    alt="Material Pro admin template"
                  />
                  <h4 className="font-500">Leyte Normal University</h4>
                  <p>Bachelore of Science in Information Technology</p>
                  <p>2015 - 2019</p>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <a href="https://drive.google.com/file/d/1-Sz74uSCaFTfgjJ_-LszQExmZfdoBDLL/view?usp=sharing">
                    <img
                      className="img-responsive"
                      src={process.env.PUBLIC_URL + '/images/Cisco-Logo.png'}
                      alt="Material Pro admin template"
                    />
                  </a>
                  <h4 className="font-500">
                    Cisco Certified Network Associate Routing and Switching
                    (CCNA)
                  </h4>
                  <p>
                    Cisco Networking Academy
                    <br />
                    Issued Apr 2017 . No Expiration Date
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <a href="https://drive.google.com/file/d/1QljHCoTSDxpsb7fNTS6YYwKViB0tSp8P/view?usp=sharing">
                    <img
                      src={process.env.PUBLIC_URL + '/images/goabroad-logo.png'}
                      alt="Material Pro admin template"
                    />
                  </a>
                  <h4 className="font-500">GoAbroad Internship Certificate</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AchievementsCertifications;
