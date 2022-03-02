import { PageContainer, Inline } from '../../components/MainComponents'
import { useState,componentDidMount} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Options__Divider,Options__Children__Counter__Big, Options__Buy, Options__Children__Counter, Options__Children, Options__Header, HamburgerContainer, HamburgerContainer__Image, Options, ContainerInline, HamburgerContainer__ProductTitle, HamburgerContainer__ProductDescription, HamburgerContainer__ProductPrice, HamburgerContainer__OldPrice } from './ProductStyle'
const Product = () => { 

    axios({ 
    method: 'get',
    url: 'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products',
    responseType: 'stream'
  })
    .then((result) => console.log(result.data[0]));
  
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
  
  return (
    <PageContainer>
      <HamburgerContainer>
        <HamburgerContainer__Image>
          <img src='./img/HamburgaoShow.png'></img>
        </HamburgerContainer__Image>
        <HamburgerContainer__ProductTitle>
          Oferta Picanha Cheddar Bacon
        </HamburgerContainer__ProductTitle>
        <HamburgerContainer__ProductDescription>
          Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim
        </HamburgerContainer__ProductDescription>
        <ContainerInline>
          <HamburgerContainer__ProductPrice>
            R$31,99
          </HamburgerContainer__ProductPrice>
          <HamburgerContainer__OldPrice>
            R$34,95
          </HamburgerContainer__OldPrice>
        </ContainerInline>
      </HamburgerContainer>
      <Options>
        <Options__Divider>
          <Options__Header>
            <p>Adicionar Ingredientes</p>
            <span>Até 8 ingredientes</span>
          </Options__Header>
          <Options__Children>
            <span>Queijo Cheddar</span>
            <Options__Children__Counter>
              <div className="input-number">
                <button type="button" onClick={handleNumberMinus} >&minus;</button>
                <span>{contador}</span>
                <button type="button" onClick={handleNumberPlus}>&#43;</button>
              </div>
            </Options__Children__Counter>
            <span className='orangeText'>+ R$4,99</span>
          </Options__Children>
          <Options__Children>
            <span>Queijo Cheddar</span>
            <Options__Children__Counter>
              <div className="input-number">
                <button type="button" onClick={handleNumberMinus} >&minus;</button>
                <span>{contador}</span>
                <button type="button" onClick={handleNumberPlus}>&#43;</button>
              </div>
            </Options__Children__Counter>
            <span className='orangeText'>+ R$4,99</span>
          </Options__Children>
          <Options__Children>
            <span>Queijo Cheddar</span>
            <Options__Children__Counter>
              <div className="input-number">
                <button type="button" onClick={handleNumberMinus} >&minus;</button>
                <span>{contador}</span>
                <button type="button" onClick={handleNumberPlus}>&#43;</button>
              </div>
            </Options__Children__Counter>
            <span className='orangeText'>+ R$4,99</span>
          </Options__Children>
          <Options__Children>
            <span>Queijo Cheddar</span>
            <Options__Children__Counter>
              <div className="input-number">
                <button type="button" onClick={handleNumberMinus} >&minus;</button>
                <span>{contador}</span>
                <button type="button" onClick={handleNumberPlus}>&#43;</button>
              </div>
            </Options__Children__Counter>
            <span className='orangeText'>+ R$4,99</span>
          </Options__Children>
          <Options__Header>
            <p>Precisa de Talher?</p>
          </Options__Header>
          <Options__Children>
            <label><span>Sim</span> <input type='radio' name='talheryesorno'/></label> 
            <br/><br/>
            <label><span>Não</span> <input type='radio' name='talheryesorno'/></label>
          </Options__Children>
        </Options__Divider>
        <Options__Divider>
          <Options__Buy>
            <Options__Children__Counter__Big>
              <div className="input-number">
                <button type="button" onClick={handleNumberMinus} >&minus;</button>
                <span>{contador}</span>
                <button type="button" onClick={handleNumberPlus}>&#43;</button>
              </div>
            </Options__Children__Counter__Big>
            <button className='addButton'>Adicionar</button>
          </Options__Buy>
        </Options__Divider>
      </Options>
   
    </PageContainer>
    
  );
 
}

const mapStateToProps = (state) => ({
    cart:state.cart
})
const mapDispatchToProps = (dispatch)=>{
  return{};
}

export default connect (mapStateToProps,mapDispatchToProps)(Product);