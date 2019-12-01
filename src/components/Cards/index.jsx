import React, {Component} from 'react'; 
// import {Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody, Button} from 'reactstrap';
import {history} from '../../history';
import './style.css'; 

class Card extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoading: false, 

        }; 
    }

    render() {
        return (
          <React.Fragment>
            <div
              className="Card city"
              onClick={() =>`${history.push("CyberronOfficial/#/underConstruction")}`}
            >
              <div className="title">{`View Services`}</div>
            </div>
            <div
              className="Card phone"
              onClick={() => `${history.push("CyberronOfficial/#/underConstruction")}`}
            >
              <div className="title">{"Become a Member"}</div>
            </div>
            <div
              className="Card office"
              onClick={() => `${history.push("CyberronOfficial/#/underConstruction")}`}
            >
              <div className="title">{"Our Founders"}</div>
            </div>
          </React.Fragment>
        ); 
    }
}

export default Card; 




