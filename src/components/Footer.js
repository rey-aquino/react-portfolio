import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <a className="bt-top btn btn-circle btn-lg btn-info" href="#top">
            <i className="ti-arrow-up" />
          </a>
          <footer className="footer row">
            <div className="fix-width">
              <div className="row">
                <span>
                  <a className="text-white" href="true">
                    Material Pro
                  </a>
                </span>
                <span className="pull-right">
                  Design &amp; Developed by
                  <a className="text-white" href="https://wrappixel.com">
                    WrapPixel
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
