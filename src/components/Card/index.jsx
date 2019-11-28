import React, {Component} from 'react'; 
// import {Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody, Button} from 'reactstrap';
import Main from '../../images/main.jpg';
import './style.scss'; 

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
            <div className="Card">
              <div className="title">{this.props.title}</div>
              <img className="image" src={this.props.image}></img>
            </div>
          </React.Fragment>
        ); 
    }
}

export default Card; 




