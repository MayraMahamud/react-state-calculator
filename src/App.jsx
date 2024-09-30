import "./App.css"
import React, {useState} from "react"

function App() {
const [display1, setDisplay1] = useState('0');
const [display2, setDisplay2] = useState('0');
const [display3, setDisplay3] = useState('0');
const [display4, setDisplay4] = useState('0');

const [currentValue, setCurrentValue] = useState(null);

const [operator, setOperator] = useState(null);

const [isEnteringSecondNumber, setIsEnteringSecondNumber] = useState(false);

const [waitingForOperand, setWaitingForOperand] = useState(false);

const updateDisplay = (number) => {
  setDisplay(prevDisplay => prevDisplay === '0' ? String(number) : prevDisplay + number);
};

const handleNumberClick = (number) => {
  if(isEnteringSecondNumber) {
    setDisplay2(prevDisplay => prevDisplay === '0' ? String(number) : prevDisplay + String(number));
    
  }  else {
    setDisplay1(prevDisplay => prevDisplay === '0' ? String(number) : prevDisplay + String(number));
  }
  };
 
const handleOperatorClick = (selectedOperator) => {
  setOperator(selectedOperator);
  setDisplay4(selectedOperator);
  setIsEnteringSecondNumber(true);
  /*const inputValue = parseFloat(display);
  if(currentValue === null) {
    setCurrentValue(inputValue);
  }
  else if (operator){
    const result = performCalculation (currentValue, inputValue, operator);
    setDisplay(String(result));
    setCurrentValue(result);
  }
  setOperator(op);
  setWaitingForOperand(true);
 */ };

const performCalculation = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
        case '*':
          return firstValue * secondValue;
          case '÷':
            return firstValue / secondValue;
      
  }
};

const handleEqualsClick = () => {
  const firstValue = parseFloat(display1);
  const secondValue = parseFloat(display2);
  if( operator) {
    const result = performCalculation(firstValue, secondValue, operator);
   
   
    setDisplay3 (String(result));
    setIsEnteringSecondNumber(false);
    setOperator(null);
  }
  //const inputValue = parseFloat(display1);
  //const inputValue2 = parseFloat(display2);

 
  //if(operator && currentValue !== null) {
  //  const result = performCalculation (currentValue, inputValue, operator);
  //  setDisplay(String(result));
   // setCurrentValue(null);
   // setOperator(null);
  //  setWaitingForOperand(false);
  }


const handleClear = () => {
  setDisplay1('0');
  setDisplay2('0');
  setDisplay3('0');
  setCurrentValue(null);
  setOperator(null);
  setWaitingForOperand(false);
  setIsEnteringSecondNumber(false);
};
















  return (
    <div className="calculator">
      <div className="panel">
        <p>{display1}</p>
       
        <div className="numbers">
          <button onClick = {() => handleNumberClick(1)}>1</button>
          <button onClick={()=> handleNumberClick(2)}>2</button>
          <button onClick={()=> handleNumberClick(3)}>3</button>
          <button onClick={()=> handleNumberClick(4)}>4</button>
          <button onClick={()=> handleNumberClick(5)}>5</button>
          <button onClick={()=> handleNumberClick(6)}>6</button>
          <button onClick={()=> handleNumberClick(7)}>7</button>
          <button onClick={()=> handleNumberClick(8)}>8</button>
          <button onClick={()=> handleNumberClick(9)}>9</button>
          <button onClick={()=> handleNumberClick(0)}>0</button>
          <button onClick = {handleClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{display4}</p>
        <div className="numbers">
        <button onClick = {() => handleOperatorClick('+')}>+</button>
        <button onClick = {() => handleOperatorClick('-')}>-</button>
        <button onClick = {() => handleOperatorClick('*')}>*</button>
        <button onClick = {() => handleOperatorClick('÷')}>÷</button>
       
        </div>
      </div>

      <div className="panel">
        <p>{display2}</p>
        <div className="numbers">
        <button onClick={()=> handleNumberClick(1)}>1</button>
        <button onClick={()=> handleNumberClick(2)}>2</button>
        <button onClick={()=> handleNumberClick(3)}>3</button>
        <button onClick={()=> handleNumberClick(4)}>4</button>
        <button onClick={()=> handleNumberClick(5)}>5</button>
        <button onClick={()=> handleNumberClick(6)}>6</button>
        <button onClick={()=> handleNumberClick(7)}>7</button>
        <button onClick={()=> handleNumberClick(8)}>8</button>
        <button onClick={()=> handleNumberClick(9)}>9</button>
        <button onClick={()=> handleNumberClick(0)}>0</button>
        <button onClick = {handleClear}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{display3}</p>
        <div>
        <button onClick = {handleEqualsClick}>=</button>
        <button onClick = {handleClear}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default App
