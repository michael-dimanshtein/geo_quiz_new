import React from "react";

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: "apple"
        }
    }
    render() {
        return (
            <div>{this.state.fruit}</div>
        )
    }
}