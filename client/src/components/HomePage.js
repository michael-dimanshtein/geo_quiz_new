import React from "react";
import Page from "./Page";

export default class HomePage extends React.Component {
    render() {
        return (
            <Page >
                <div className="jumbotron">
                    <h1>Welcome to a thought in process</h1>
                    <p><a className="btn btn-primary btn-lg" id="game-starter" href="/quiz" role="button">Start the game</a></p>
                </div>
            </Page>
        )
    }
}