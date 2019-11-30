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
                                    This is a modified jumbotron that occupies
                                    the entire horizontal space of its parent.
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