import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-12 call-to-action bg-success">
              <div className="fix-width">
                <div className="row">
                  <div className="col-md-12 m-t-20 m-b-20 text-center">
                    <span>Have Any Project In Mind?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fix-width">
            <div id="contact" className="row banner-text">
              <div className="col-lg-12 m-t-40 text-center">
                <div className="down-btn m-t-20">
                  <a
                    href="mailto:includeiostreamsharp@gmail.com"
                    className="btn btn-success btn-rounded m-b-10"
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
