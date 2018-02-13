import React from "react";
import Page from "./Page";
import axios from "axios";

export default class TestPage extends React.Component {
    constructor(props){
        super(props);
        this.handleAllCountries = this.handleAllCountries.bind(this);
    }
    handleAllCountries(e) {
        // e.preventDefault();
        axios.get("/api/testpage").then(response => console.log(response)).catch((error => console.log));
        
    }
    render() {
        return (
            <Page>
                <div className="jumbotron">
                    <h1>we're testing </h1>
                    <p>Where you can select coutry</p>
                    <button className="square" onClick={(e)=>{ 
                        this.handleAllCountries();
                        (console.log("show countries"))}
                    }>Click to list all possible countries</button>
                </div>
            </Page>
        )
    }
}