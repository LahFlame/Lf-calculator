import "./calculator-container.styles.scss"
import React from "react";

import ButtonContainer from "../button-container/button-container.component";
import ButtonScreen from "../button-screen/button-screen.component";

class CalculatorContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            result: "",
            inputNum: "",
            displayResult: false,
            displayNum: false,
            sign: ""
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const {result,inputNum,displayResult,displayNum,sign} = this.state;
        const buttonChar= e.target.innerText;
        const number = Number(buttonChar)

        if(number >= 0){
             this.setState({
                result: result, 
                inputNum: inputNum + buttonChar,
                displayResult: false,
                displayNum: true,
                sign: sign
            })
        }
        if(buttonChar === "." && !inputNum.includes(".") ){
            this.setState({
                result: result, 
                inputNum: inputNum + buttonChar,
                displayResult: false,
                displayNum: true,
                sign: sign
            })
        }
        if(buttonChar === "+"){
            this.setSign(result,inputNum,displayResult,displayNum,"+");
            if(result === ""){
            this.defaultFirstCalc(result,inputNum,"+")
            }else {
                if(sign === "+") {
                    this.addFunc(result,inputNum,sign)
                }else{  
                    this.prevAddCalc(result,inputNum,sign);                  
                }
            }
        }
        if(buttonChar === "-"){
            this.setSign(result,inputNum,displayResult,displayNum,"-");
            if(result === ""){
                this.defaultFirstCalc(result,inputNum,"-");
            }else{
                if(sign === "-"){
                    this.subtractFunc(result,inputNum,sign)
                }else{
                    this.prevDiffCalc(result,inputNum,sign)
                }
            }
        }
        if(buttonChar === "x"){
            this.setSign(result,inputNum,displayResult,displayNum,"x");
            if(result === ""){
                this.defaultFirstCalc(result,inputNum,"x");
            }else{
                if (sign === "x"){
                    this.multiplyFunc(result,inputNum,sign)
                }else{
                    this.prevMulCalc(result,inputNum,sign)
                }
            }
        }
        if(buttonChar === "÷"){
            this.setSign(result,inputNum,displayResult,displayNum,"÷");
            if(result === ""){
                this.defaultFirstCalc(result,inputNum,"÷");
            }else{
                if(sign === "÷"){
                    this.divideFunc(result,inputNum,sign)
                }else{
                    this.prevDivCalc(result,inputNum,sign);
                }
            }
        }
        if(buttonChar === "C"){
            this.setState({
                result: "",
                inputNum: "",
                displayResult: false,
                displayNum: false,
                sign: ""
            })
        }
        if(buttonChar === "="){
            this.prevDataCalc(result,inputNum,sign)
        }
        if(buttonChar === "←"){
            this.handleDel(inputNum);
        }

    }

    prevAddCalc = (result,inputNumber,sign) =>{
            if(sign === "-"){
                this.subtractFunc(result,inputNumber,"+");
                }
            if(sign === "x"){
                this.multiplyFunc(result,inputNumber,"+");
                }
            if(sign === "÷"){
                this.divideFunc(result,inputNumber,"+");
                }

            }
        prevDiffCalc = (result,inputNumber,sign) =>{
                if(sign === "+"){
                    this.addFunc(result,inputNumber,"-");
                    }
                
                if(sign === "x"){
                    this.multiplyFunc(result,inputNumber,"-");
                    }
                if(sign === "÷"){
                    this.divideFunc(result,inputNumber,"-");
                    }
    
                }
            prevMulCalc = (result,inputNumber,sign) =>{
                    if(sign === "+"){
                        this.addFunc(result,inputNumber,"x");
                        }
                    if(sign === "-"){
                        this.subtractFunc(result,inputNumber,"x");
                        }
                    if(sign === "÷"){
                        this.divideFunc(result,inputNumber,"x");
                        }
        
                    }
            prevDivCalc = (result,inputNumber,sign) =>{
                        if(sign === "+"){
                            this.addFunc(result,inputNumber,"÷")
                            }
                        if(sign === "-"){
                            this.subtractFunc(result,inputNumber,"÷")
                            }
                        if(sign === "x"){
                            this.multiplyFunc(result,inputNumber,"÷")
                                }
                        }
                prevDataCalc = (result,inputNumber,sign) =>{
                            if(sign === "+"){
                                this.addFunc(result,inputNumber,"")
                                }
                            
                            if(sign === "-"){
                                this.subtractFunc(result,inputNumber,"")
                                }
                            if(sign === "x"){
                                this.multiplyFunc(result,inputNumber,"");         
                                }
                            if(sign === "÷"){
                                this.divideFunc(result,inputNumber,"");
                                    
                            }        
                        }
                setSign = (result,inputnum,dResult,dNum,sign) => {
                    this.setState({
                        result: result,
                        inputNum: inputnum,
                        displayResult: dResult,
                        displayNum: dNum,
                        sign: sign
                    })
                }
                defaultFirstCalc = (result,inputNum,sign) => {
                    this.setState({
                        result:  Number(inputNum),
                        inputNum: result,
                        displayResult: true,
                        displayNum: false,
                        sign: sign
                    })
                }
                addFunc = (result,inputNum,sign) => {
                    this.setState({
                        result: result + Number(inputNum),
                        inputNum: "",
                        displayResult: true,
                        displayNum: false,
                        sign: sign
                    })
                }
                subtractFunc = (result,inputNum,sign) => {
                    this.setState({
                        result:  result - Number(inputNum),
                        inputNum: "",
                        displayResult: true,
                        displayNum: false,
                        sign: sign
                    })
                }
                multiplyFunc = (result,inputNum,sign) => {
                    this.setState({
                        result:  result * Number(inputNum),
                        inputNum: "",
                        displayResult: true,
                        displayNum: false,
                        sign: sign
                    })
                }
                divideFunc = (result,inputNum,sign) => {
                    this.setState({
                        result:  result / Number(inputNum),
                        inputNum: "",
                        displayResult: true,
                        displayNum: false,
                        sign: sign
                    })
                }
                handleDel  = (inputNum) => {
                  
                    const lastPosition = inputNum.length-1;
                    this.setState((prevState) => {
                        return ({
                            ...prevState,
                            inputNum: inputNum.slice(0,lastPosition)})
                    })
                }
            
    render(){
        return(
            <div className="calculator-container">
                <ButtonScreen 
                    result={this.state.result} 
                    input={this.state.inputNum} 
                    displayResult={this.state.displayResult} 
                    displayNum={this.state.displayNum}
                />
                <ButtonContainer 
                    handleClick={this.handleClick} 
                />
            </div>
        )
    }
}

export default CalculatorContainer;