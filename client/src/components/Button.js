import React from "react";

const Button = (props) => {
    return(
        <div>
            <button onClick = {(e) => {props.handleButtonClick(props.buttonText)}}
            >
            {props.buttonText}
            </button>
            <div className="single_country_info">
                <ul>
                    <li>{props.response}</li>
                </ul>
            </div>
        </div>
    );
}

export default Button;