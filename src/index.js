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
                <MDBCol md="9"><Event/></MDBCol>
                <MDBCol md="3"><Event/></MDBCol>
                </MDBRow>
            </MDBContainer>
            </React.Fragment>
        );
    }
}
class Event extends Component {
    state = {};
    render() {
        return "schedule item"
    }
}
ReactDOM.render(<App />, document.getElementById("root"));