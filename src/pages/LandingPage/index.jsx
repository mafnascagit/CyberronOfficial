import React, {Component} from 'react'; 
import Directory from '../../components/Directory'; 
import {history} from '../..//history';
import {LOCAL} from '../../configs'; 
import Spinner from "react-spinner-material";
import CoreValues from '../../components/CoreValues'; 
import PageLoader from '../../components/PageLoader'; 
import './style.css'; 

class LandingPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoading: true, 
            isMobile: false,     
        }; 
    }

    componentDidMount() {
      
        if (window.screen.width <= 700) {
            this.setState({ 
               isMobile: true, 
            })
              history.push(
                LOCAL
                  ? "/#/mobileUnderContruction"
                  : "/CyberronOfficial/#/mobileUnderContruction"
              );
        }
    }

    checkIsLoading(isLoading) {
        if (isLoading == false) {
          this.setState({
            isLoading: false, 
          })
        }
    }

    render() {
        if (this.state.isMobile) {
            return null;  
        }
        return (
          <React.Fragment>
            {this.state.isLoading ? (
              <div>
               <PageLoader url='' isLoading={(isLoading) => this.checkIsLoading(isLoading)} />
              </div>
            ) : (
              <div className="LandingPage">
                <div className="banner">
                  <h1 className="landingTitle">Innovate. Think. Believe. Cyberron.</h1>
                  {/* <div className="buttons">
                    <button className="exploreButton">Make a Proposal</button>
                    <button className="exploreButton">Learn More</button>
                  </div> */}
                </div>
                <Directory />
                <div className="core">
                  <div className="ourValues">Our Values</div>
                  <CoreValues />
                </div>
              </div>
            )}
          </React.Fragment>
        );
    }
}

export default LandingPage; 