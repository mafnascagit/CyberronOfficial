import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect, Router, BrowserRouter} from "react-router-dom";
import { history } from "../history";
import LandingPage from "../pages/LandingPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileUnderContruction from "../pages/MobileUnderContruction";
import UnderConstructionPage from '../pages/UnderConstructionPage';
import {LOCAL} from '../configs';

class Portal extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isAuthenticated: false
    };
  }

  componentDidMount() {
    console.log("Component has mounted: Portal");
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <HashRouter history={history}>
          <Switch>
            <Route exact path="/landing" component={LandingPage} />
            <Route
              exact
              path="/mobileUnderContruction"
              component={MobileUnderContruction}
            />
            <Route
                exact 
                path="/underConstruction"
                component={UnderConstructionPage}
            />
 
            {/* {!this.state.isAuthenticated ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/adminPage" />
            )} */}
            {LOCAL == true ? (
              <Redirect from="/" to="/landing"></Redirect>
            ) : (
              <Redirect
                from="CyberronOfficial/#/"
                to="CyberronOfficial/#/landing"
              ></Redirect>
            )}
          </Switch>
        </HashRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Portal;
