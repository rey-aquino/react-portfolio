import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div>
        <div className="preloader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx={50}
              cy={50}
              r={20}
              fill="none"
              strokeWidth={5}
              strokeMiterlimit={10}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Preloader;
