import React, { Component } from "react";
import { COMPANY_NAME } from "../../configs";
import "./style.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
    <React.Fragment>
      <div className="NavBar">
        <div className="companyName">{COMPANY_NAME}</div>
        <div className=""></div>
        <div className="navButtons">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </React.Fragment>);
  }
}

export default NavBar; 
