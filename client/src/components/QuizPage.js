import React from "react";
import Page from "./Page";
import axios from "axios";

export default class QuizPage extends React.Component {
    componentWillMount() {
        axios.get("/api/random").then(response => console.log(response)).catch((error => console.log));
        console.log('mounted');
    }
    render() {
        return (
            <Page >
            <div className="jumbotron">
            <h2>Guess the capital of this country!</h2>
            <div>
                <h3>Aruba</h3>
                <div id="map">
                    <img alt="map" src="https://maps.googleapis.com/maps/api/staticmap?center=Oranjestad,Aruba&zoom=8&size=800x800&markers=12.5167,-70.0167&key=AIzaSyDJjPLvI2_m41o7nMfCAeT_SleyT_B5MKI"
                    />
                </div>
                <br />
                <div>
                    <button type="button" className="btn btn-primary btn-lg" id='answer1'>Answer1</button>
                    <button type="button" className="btn btn-primary btn-lg" id='answer2'>Answer2</button>
                    <button type="button" className="btn btn-primary btn-lg" id='answer3'>Answer3</button>
                    <button type="button" className="btn btn-primary btn-lg" id='answer4'>Answer4</button>
                    <button type="button" className="btn btn-primary btn-lg" id='submit'>Submit</button>

                </div>

            </div>
        </div>
            </Page>
        )
    }
}