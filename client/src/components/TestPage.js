import React from "react";
import Page from "./Page";
import axios from "axios";

export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: ["allen", "boss"],
            number: 12

        };
    }
    componentDidMount() {
        axios.get("/api/testpage").then(response => this.setState({ countryNames: response.data }))
            .catch((error => console.log))
        this.setState(() => ({ number: 22 }));
    }

    render() {
        return (
            <Page>
                <div className="jumbotron">
                    <h1>we're testing </h1>
                    <p>Where you can select country</p>
                    <div className="result">
                        <p>{this.state.number}</p>
                        <p>{this.state.number}</p>
                        <ul>
                            {this.state.countryNames.map((name, index) =>
                                <li key={index}>{name}</li>)}
                        </ul>
                    </div>
                    <div className="buttons">
                        <ul>
                            {this.state.countryNames.map((name, index) =>
                                <li key={index}><button>{name}</button></li>)}
                        </ul>
                    </div>
                </div>

            </Page>
        )
    }
}
