import React from "react";
import "./button.styles.scss"

const Button = ({value,handleClick}) => {
    return(
        <div className="button">
            <button onClick={handleClick} >{value}</button>
        </div>
    )
}

export default Button;