import React, { Component } from 'react';
import {history} from '../../history'; 
import {LOCAL} from '../../configs'; 
import './style.css'; 


class MobileUnderConstruction extends Component {
    constructor() {
        super(); 
        this.state = {
            isLoading: false, 
            isMobile: false, 
        }
    }
    isMobile() {
        if (window.screen.width > 700) {
            this.setState({
                isMobile: true,
            })
        }
    }
    componentDidMount() {
        console.log("Component Mounted : MobileUnderContruction");
        this.isMobile();
    }
    render() {
         if (this.state.isMobile) {
           history.push(LOCAL == true ? "/" : "/CyberronOfficial/#/");
           return null; 
         }
        return(
            <React.Fragment>
                <div className="MobileUnderConstruction">
                    <h1 className="mobileMessage">Oh no!</h1>
                    <h1 className="mobileMessage">Our mobile webpage is under construction - Please check back later!</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default MobileUnderConstruction; 