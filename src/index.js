import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12"><h1>Agendum</h1></MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="9">
                    <Event>Meeting with Bob </Event>
                    <Event>Meeting with Alice </Event>
                </MDBCol>
                <MDBCol md="3">°C</MDBCol>
                </MDBRow>
            </MDBContainer>
            </React.Fragment>
        );
    }
}
class Event extends Component {
    state = {
        time: "10:00",
        title: "s my state title"
    };
    constructor(){
        super();
        this.varTime = "12:00"
        this.varTitle = "c My variable title"
    }
    render() {
        return (
            <React.Fragment>
                <h3>State: {this.state.time} - {this.state.title}</h3>
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