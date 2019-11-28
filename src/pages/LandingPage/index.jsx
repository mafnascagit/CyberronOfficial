import React, {Component} from 'react'; 
import Directory from '../../components/Directory'; 
import './style.scss'; 

class LandingPage extends Component {
    constructor() {
        super(); 
        this.state = {
            isLoading: true, 
        }; 
    }

    componentDidMount() {
        this.setState({
            isLoading: false, 
        })

        console.log("Component has mounted: LandingPage"); 
    }

    render() {
        return (
            <React.Fragment>
                <div className="LandingPage">
                    <div className="banner">
                        <h1>Innovate.  Think.  Believe. Cyberron.</h1>
                    </div>
                    <Directory/>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage; 