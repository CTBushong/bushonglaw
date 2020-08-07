import { Link } from "gatsby";
import React, { Component } from "react";
import { FaEnvelope } from "react-icons/fa";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <h2>Bushong Law</h2>
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  {data.menus
                  .filter(item => item === "Contact")
                  .map(t => {
                    return (
                      <li>
                        <Link to={`/#Contact`}><FaEnvelope/> Contact Me </Link> 
                      </li>
                    );
                  })}
                  {/*
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#blogs`}>Articles</Link>
                        </li>
                      );
                    })}
                  */}
                  <li>
                  <a
                    className="fab fa-facebook-f"
                    href="https://youtube.com/[xxxx]"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-twitter"
                    href="https://twitter.com/[xxxx]"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href="https://instagram.com/[xxxx]"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href="https://linkedin.com/[xxxx]"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  {/*
                    {data.menus
                    .filter(item => item === "blogs")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/blogs">Articles</Link>
                        </li>
                      );
                    })}
                  */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

