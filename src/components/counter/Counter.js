import {Children__Counter} from './CounterStyle';
import { useState } from 'react';

const Counter = ()=>{
  const [contador, setContador] = useState(0);
  const handleNumberMinus = () => {
    if (contador <= 0) {
      setContador(0);
      window.alert('Não pode ser abaixo de 0 😡')
    } else {
      setContador(contador - 1);
    }
  }
  const handleNumberPlus = (props) => {
    setContador(contador + 1);
    
  }
  return(
    <Children__Counter>
      <div className="input-number">
        <button type="button" onClick={handleNumberMinus} >&minus;</button>
        <span>{contador}</span>
        <button type="button" onClick={handleNumberPlus}>&#43;</button>
      </div>
    </Children__Counter>
  );
}


export default Counter;