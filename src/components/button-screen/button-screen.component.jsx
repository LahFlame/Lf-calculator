import React from "react"
import "./button-screen.styles.scss"

const ButtonScreen = ({result,input,displayResult,displayNum}) => {
    return(
        <div className="button-screen">
            <span className={`default ${displayResult ? null : displayNum === false || displayNum.length === 0  ? "animate" : null} `}>0</span>
            <span className={`${displayResult? "small" : null}`}>{displayResult ? result : displayNum ? input : null}</span>
        </div>
    )
}

export default ButtonScreen;