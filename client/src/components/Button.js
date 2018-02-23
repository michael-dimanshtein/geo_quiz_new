import React from "react";

const Button = (props) => {
    return(
        <div>
            <button onClick = {(e) => {props.handleButtonClick(props.buttonText)}}
            >
            {props.buttonText}
            </button>
        </div>
    );
}

export default Button;