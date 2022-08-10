import React,{useState} from 'react'
import './Calculator.css'

const Calculator = () =>{

  const [firstNumber, setFirstNumber] = useState(0)
  const [lastNumber, setLastNumber] = useState(0)
  const [resultEnd, setResultEnd] = useState()
  const [operator, setOperator] = useState('')
  

  const handleClickNumber = (number) => {
    
    if(resultEnd === 0){
   alert('clique no botão R para resetar')
    }
    else if(resultEnd > 0){
    alert('clique no botão R para resetar')
    }
    else if(resultEnd < 0){
    alert('clique no botão R para resetar')
    }
    else if(firstNumber === 0){
      setFirstNumber(number)
    }
    else{
      setFirstNumber( firstNumber + number )
    }

      
   
  
   
    
  }

  const handleClickOperator = (operator) =>{
    

    if(!firstNumber){
      alert('Entre com o número!')
    }
  
    else{
    
      setLastNumber(firstNumber)
      setFirstNumber(0)
      setOperator(operator)
    }
  }



  const handleClickResult = () =>{
    
    if(operator === '+'){
      setResultEnd( Number(lastNumber) + Number(firstNumber))
      setFirstNumber()
      setLastNumber()
      setOperator('')
    }
    else if(operator === '-'){
      setResultEnd( Number(lastNumber) -  Number(firstNumber))
      setFirstNumber()
      setLastNumber()
      setOperator('')
     
    }
    else if( operator === '*'){
      setResultEnd( Number(lastNumber) *  Number(firstNumber))
      setFirstNumber()
      setLastNumber()
      setOperator('')
    }
    else if( operator === '/'){
      setResultEnd((Number(lastNumber) /  Number(firstNumber)).toFixed(1))
      setFirstNumber()
      setLastNumber()
      setOperator('')
    }



  }


  const handleClickReset = () =>{
    setFirstNumber(0)
    setLastNumber()
    setOperator('')
    setResultEnd()
  }

  return(
    <>

    <div className="container">
      
    <div className="textArea">
      <div className="numbers">
         <span className="number">
         {firstNumber} {operator} 
           {resultEnd}
         </span>
      </div>
    </div>

    <div className='calculator'>

     <div className='column'>
      <button className="reset" onClick={handleClickReset}>R</button> 
      <button onClick={() => handleClickNumber('1')}>1</button>
      <button onClick={() => handleClickNumber('4')}>4</button>
      <button onClick={() => handleClickNumber('7')}>7</button>
      <button onClick={() => handleClickNumber('0')}>0</button>
     </div>

     <div className='column'>
      <button onClick={() => handleClickNumber('2')}>2</button>
      <button onClick={() => handleClickNumber('5')}>5</button>
      <button onClick={() => handleClickNumber('8')}>8</button>
      <button onClick={() => handleClickNumber('.')}>.</button>
     </div>

     <div className='column'>
      <button onClick={() => handleClickNumber('3')}>3</button>
      <button onClick={() => handleClickNumber('6')}>6</button>
      <button onClick={() => handleClickNumber('9')}>9</button>
      <button className='result' onClick={handleClickResult}>=</button>
     </div>

     <div className='column'>
    
      <button className="operators" onClick={() => handleClickOperator('+')}>+</button>
      <button className="operators" onClick={() => handleClickOperator('-')}>-</button>
      <button className="operators" onClick={() => handleClickOperator('/')}>/</button>
      <button className="operators" onClick={() => handleClickOperator('*')}>x</button>
     </div>

     
    </div>


    </div>
    
    </>
  )
}

export default Calculator