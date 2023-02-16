import React from "react";
import "./button-container.styles.scss"
import data from "../../data";
import Button from "../buttons/button.component";

const ButtonContainer = ({handleClick,displayResult,displayNum}) => {
    return(
        <section className="button-container">
            {
                data.map(({id,value})=> 
                    <Button 
                        key={id} 
                        value={value} 
                        handleClick={handleClick}
                    />
                )
            }
        </section>
    )
}

export default ButtonContainer;