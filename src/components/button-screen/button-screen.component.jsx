import React from "react"
import "./button-screen.styles.scss"

const ButtonScreen = ({result,input,displayResult,displayNum}) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return(
        <div className="button-screen">
            <span className={`default ${displayResult ? null : displayNum === false || displayNum.length === 0  ? "animate" : null} `}>0</span>
            <span className={`${displayResult? "small" : null}`}>
                {
                    
                    displayResult && (result.toString().length > 21) ? result : displayResult && (result.toString().length < 22) ? numberWithCommas(result) : displayNum ? input : null
                }
            </span>
        </div>
    )
}

export default ButtonScreen;