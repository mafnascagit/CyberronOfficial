import React, {Component} from 'react'; 
import {HashRouter,  Route, Switch, Redirect} from 'react-router-dom'; 
import LandingPage from '../pages/LandingPage'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; 

class Portal extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isAuthenticated: false, 
    };
  }

  componentDidMount() {
    console.log("Component has mounted: Portal");
  }

  render() {
      return (
        <React.Fragment>
          <NavBar/>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              {!this.state.isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <Redirect to="/adminPage" />
              )}
            </Switch>
          </HashRouter>
          <Footer/>
        </React.Fragment>
      );
  }
}

export default Portal; 