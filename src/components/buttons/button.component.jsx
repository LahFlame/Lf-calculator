import React from "react";
import "./button.styles.scss"

const Button = ({value,handleClick}) => {
    return(
        <div className="button">
            <button onClick={handleClick} name={value}>{value}</button>
        </div>
    )
}

export default Button;