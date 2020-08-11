import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
class App extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                  id: 1,
                  time: "10:00",
                  title: "Breakfast with Simon",
                  location: "Lounge Caffe",
                  description: "Discuss Q3 targets"
                },
                {
                  id: 2,
                  time: "10:30",
                  title: "Daily Standup Meeting (recurring)",
                  location: "Warsaw Spire Office"
                },
                { id: 3, time: "11:00", title: "Call with HRs" },
                {
                  id: 4,
                  time: "11:00",
                  title: "Lunch with Timothy",
                  location: "Canteen",
                  description:
                    "Project evaluation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
                }
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12"><h1>Agendum</h1></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="9">
                    {this.state.events.map(event => (
                        <Event
                        key={event.id}
                        id={event.id}
                        time={event.time}
                        title={event.title}
                        location={event.location}
                        description={event.description}
                        />
                    ))}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </React.Fragment>
        );
    };
    myLoopFunction() {
        var myArray = [];
        var i;
        for (i = 0; i < this.state.events.length; i++) {
          myArray[i] = (
            <Event
              time={this.state.events[i].time}
              title={this.state.events[i].title}
            />
          );
        }
        return myArray;
      }
}
class Event extends Component {
    state = {};
    constructor(props){
        super(props);
        this.state = {
            time: this.props.time,
            title: this.props.title,
            location: this.props.location,
            description: this.props.description
        };
    };
    render() {
        return (
            <React.Fragment>
                <h3>
                {this.state.time} - {this.state.title}
                </h3>
                <h6>Location: {this.state.location}</h6>
                <p>Desc: {this.state.description}</p>
                <button 
                    onClick={()=>{
                        this.setState({title: "-----"});
                        console.log(this.state.title);
                        console.log('new test line', this.state);
                    }}>Change my title</button>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));