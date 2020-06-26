import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects" className="row white-space">
          <div className="col-md-12" id="demos">
            <div className="text-center">
              <h1>My Projects</h1>
            </div>
            <div className="max-width">
              <div className="row text-center">
                <div className="col-md-4 m-t-40">
                  <div className="image-box">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/images/material-demo1.jpg'
                      }
                      alt="demo1"
                      className="img-responsive"
                    />
                    <div className="image-overly">
                      <a className="btn btn-rounded btn-info" href="true">
                        Live Preview
                      </a>
                    </div>
                  </div>
                  <h5 className="p-20">
                    Document Tracking System Using Bayesian Algorithm
                  </h5>
                </div>
                <div className="col-md-4 m-t-40">
                  <div className="image-box">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/images/material-demo2.jpg'
                      }
                      alt="demo2"
                      className="img-responsive"
                    />
                    <div className="image-overly">
                      <a className="btn btn-rounded btn-info" href="true">
                        Live Preview
                      </a>
                    </div>
                  </div>
                  <h5 className="p-20">Performance Evaluation System</h5>
                </div>
                <div className="col-md-4 m-t-40">
                  <div className="image-box">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/images/material-demo3.jpg'
                      }
                      alt="demo3"
                      className="img-responsive"
                    />
                    <div className="image-overly">
                      <a className="btn btn-rounded btn-info" href="true">
                        Live Preview
                      </a>
                    </div>
                  </div>
                  <h5 className="p-20">Pending Title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
