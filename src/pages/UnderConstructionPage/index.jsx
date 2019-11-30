import React, {Component} from 'react'; 
import './style.css'; 

class UnderConstructionPage extends Component {
    constructor() {
        super(); 
        this.state = {};
    }

    render() {
        return (
        <React.Fragment>
            <div className="UnderConstructionPage">
                <h1>Sorry Mate! <br/> Looks like this page is under construction, please try again later</h1>
            </div>
        </React.Fragment>)
    }
}

export default UnderConstructionPage; 