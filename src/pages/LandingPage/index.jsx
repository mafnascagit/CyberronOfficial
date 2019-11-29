import React, {Component} from 'react'; 
import Directory from '../../components/Directory'; 
import {history} from '../..//history';
import {LOCAL} from '../../configs'; 
import Spinner from "react-spinner-material";
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
        if (this.state.isLoading) {
           this.activateLoader();
        }

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

    activateLoader() {
        const timer = setTimeout(() => {
          this.setState({
              isLoading: false, 
          })
        }, 4000)

        return timer; 
    }

    render() {
        if (this.state.isMobile) {
            return null;  
        }
        return (
          <React.Fragment>
            {this.state.isLoading ? (
              <div className="pageLoader">
                <h1 className="loading">Loading</h1>
                <div>
                  <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                  />
                </div>
              </div>
            ) : (
                <div className="LandingPage">
                  <div className="banner">
                    <h1>Innovate. Think. Believe. Cyberron.</h1>
                    <button className="exploreButton">Innovate Here</button>
                  </div>
                  <Directory />
                </div>
            )}
          </React.Fragment>
        );
    }
}

export default LandingPage; 