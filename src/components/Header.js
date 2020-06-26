import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="topheader" id="top">
          <div className="fix-width">
            <nav className="navbar navbar-expand-md navbar-light p-l-0">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="index.html">
                {/* <img
                  src={
                    process.env.PUBLIC_URL + '/images/material-admin-logo.png'
                  }
                  alt="admin template"
                /> */}
              </a>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto stylish-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experiences">
                      Work Experiences
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      My Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      Achievements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
