import React from "react";

export default class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <header>
                    <div className="page-header">
                        <h1>Welcome to Geo Quiz <small>the geography game</small></h1>
                    </div>
                </header>
                {this.props.children}
            </div>
        )
    }
}