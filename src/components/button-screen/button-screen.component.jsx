import React from "react"
import "./button-screen.styles.scss"

const ButtonScreen = ({result,input,displayResult,displayNum}) => {
    return(
        <div className="button-screen">
            <span className={`default ${displayResult ? null : displayNum ? null : "animate"}`}>0</span>
            <span>{displayResult ? result : displayNum ? input : null}</span>
        </div>
    )
}

export default ButtonScreen;