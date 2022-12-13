import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";



const App = () => {
  
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [total, setTotal ] = useState('0');
  const [operation, setOperation] = useState('');

  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  }
  const handleClear = () => {
    setCurrentNumber('')
  }
  const escolheOperacao = (operacao) => {
    
    if(currentNumber !== ''){
      setFirstNumber(currentNumber)
      setOperation(operacao)
      handleClear()
    }else{
      handleAddNumber('ERROR')
      return;
    }

  }
  const handleTotal = () => {
    realizaOperacao(firstNumber, currentNumber, operation)
  }

  
  


  const realizaOperacao  = (n1,n2, operation) => {
    
    
    let total;

    switch(operation){
      case '+' :
        total = Number(n1) + Number(n2);
      break;
      case '-' :
        total = Number(n1) - Number(n2);
      break;
      case '/' :
        total = Number(n1) / Number(n2);
      break;
      case '*' :
        total = Number(n1) * Number(n2);
      break;
      default :

      break;  
    }

    handleClear()
    handleAddNumber(total)

  }


  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={() => escolheOperacao('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => escolheOperacao('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="*" onClick={() => escolheOperacao('*')}/>
        </Row>
        <Row>
          <Button label="AC" onClick={handleClear}/>
          <Button label="0"  onClick={() => handleAddNumber('0')}/>
          <Button label="="  onClick={() => handleTotal()}/>
          <Button label="/"  onClick={() => escolheOperacao('/')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;