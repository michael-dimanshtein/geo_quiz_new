import React from "react";
import Page from "./Page";
import axios from "axios";
import Button from "./Button";

export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind();
        this.state = {
            countryNames: []
        }
    }

    handleButtonClick(buttonText) {
        alert(buttonText);
        axios.get("/api/single_info", {params:{name:buttonText}}).then(response => console.log(response)).catch((error => console.log))
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
                    <h1>Country info page </h1>
                    <p>Where you can select the country to get more info</p>
                    <div>
                        {this.state.countryNames.map((country) => (
                            <Button
                                key={country}
                                buttonText={country}
                                handleButtonClick={this.handleButtonClick}
                            />
                        ))
                        }
                    </div>
                </div>
            </Page>
        )
    }
}
