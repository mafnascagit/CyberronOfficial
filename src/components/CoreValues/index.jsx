import React, {Component} from 'react'; 
import { Jumbotron, Container } from "reactstrap";
import './style.css'; 

class CoreValues extends Component {
    constructor() {
        super(); 
        this.state = {
          values: [
            {
              id: 1,
              title: "Innovate",
              description: "",
              className: "innovate img",
              descTitle: "Why Innovate?"
            },
            {
              id: 2,
              title: "Think",
              description: "",
              className: "think img",
              descTitle: `Why Think?`,
            },
            {
              id: 3,
              title: "Believe",
              description: "",
              className: "believe img",
              descTitle: "Why Believe?"
            }
          ]
        }; 
    }

    render() {
        return (
          <React.Fragment>
              {
                  this.state.values.map((item) => {
                      return (
                        <React.Fragment>
                          <div className="CoreValues">
                            <div className="coreContatiner">
                              <div className="coreTitle">{item.title}</div>
                              <div className={item.className}></div>
                            </div>
                            <div className="descContainer">
                              <Jumbotron fluid>
                                <Container fluid>
                                  <h1 className="display-3">
                                    {item.descTitle}
                                  </h1>
                                  <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                  </p>
                                </Container>
                              </Jumbotron>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                  })
              }
          </React.Fragment>
        );
    }
}

export default CoreValues; 