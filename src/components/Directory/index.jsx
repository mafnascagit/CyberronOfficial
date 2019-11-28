import React, { Component } from "react";
import Card from "../Card";
import Office from "../../images/office.jpg";
import Tunnel from "../../images/tunnel.jpg";
import Cyber from "../../images/cyber.jpg";
import City from '../../images/city.jpg';
import "./style.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          title: "Explore our Services",
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
          {this.state.cards.map(card => {
            return <Card image={card.img} title={card.title} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Directory;
