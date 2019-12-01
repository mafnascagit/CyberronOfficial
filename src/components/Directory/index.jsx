import React, { Component } from "react";
import Cards from "../Cards";
import Office from "../../images/office.jpg";
import Tunnel from "../../images/tunnel.jpg";
import City from '../../images/city.jpg';
import "./style.css";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          title: "View Services",
          img: `${City}`
        },
        {
          id: 2,
          title: "Become a Member",
          img: `${Tunnel}`
        },
        {
          id: 3,
          title: "Our Leaders",
          img: `${Office}`
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="Directory">
          <Cards />;
        </div>
      </React.Fragment>
    );
  }
}

export default Directory;
