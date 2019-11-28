import React, {Component} from 'react';
import './style.scss'; 


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      legalLinks: [
        { id: 1, name: "Terms & Conditions" },
        { id: 2, name: "Privacy Notice" },
        { id: 3, name: "Cookie Policy" }
      ]
    };
  }

  render() {
    return (
      <div className="footer">
        <div className="copyright">{`© 2019 Cyberron Technologies | All Rights Reserved. | Innovating the World`}</div>
        <div className="legalNav">
          {this.state.legalLinks.map(link => {
            return (
              <span key={link.id} className="link-item">
                {link.name}
              </span>
            );
          })}
        </div>
        <div className="invcore">Powered By: InvisionCore LLC</div>
      </div>
    );
  }
}

export default Footer; 