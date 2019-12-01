import React, { Component } from "react";
import Spinner from "react-spinner-material";
import { history } from "../../history";
import './style.css'; 

class PageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.activateLoader(this.props.url);
  }

  activateLoader(url) {
    const timer = setTimeout(() => {
      this.setState({
        isLoading: false
      });
      if (url) {
        history.push(url);
      }
    }, 2500);

    return timer;
  }

  closeLoader() {
    this.props.isLoading(this.state.isLoading);
  }

  render() {
    if (this.state.isLoading == false) {
      this.closeLoader();
      return null;
    }
    return (
      <React.Fragment>
        <div className="PageLoader">
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
      </React.Fragment>
    );
  }
}

export default PageLoader;
