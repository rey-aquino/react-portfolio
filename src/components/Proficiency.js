import React, { Component } from 'react';

class Proficiency extends Component {
  render() {
    return (
      <div>
        <div className="row m-t-40">
          <div className="col-md-12" id="demos">
            <div className="text-center">
              <h1>Proficiency</h1>
            </div>
            <div className="fix-width">
              <div className="row banner-text">
                <div className="col-lg-5 m-t-40">
                  <div className>
                    <span className="text-muted display-5" />
                    <div className="dl ">
                      <h3 className="card-title">Front-End</h3>
                      <h6 className="card-subtitle">60%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '60%', height: 20 }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className>
                    <span className="text-muted display-5" />
                    <div className="dl ">
                      <h3 className="card-title">Back-End</h3>
                      <h6 className="card-subtitle">65%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '65%', height: 20 }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className>
                    <span className="text-muted display-5" />
                    <div className="dl ">
                      <h3 className="card-title">Programming</h3>
                      <h6 className="card-subtitle">65%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '65%', height: 20 }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 m-t-40">
                  <div className="hero-banner">
                    {/* <img
                      src={process.env.PUBLIC_URL + '/images/banner.jpg'}
                      alt="Material Pro admin template"
                    /> */}
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

export default Proficiency;
