import React from "react"; 
import "./App.css";

import CalculatorContainer from "./components/calculator-container/calculator-container.component";
import Header from "./components/header/header.component";

function App() { 
  return(
    <div>
      <Header />
      <CalculatorContainer />
    </div>
  ); 
} 

export default App; 
