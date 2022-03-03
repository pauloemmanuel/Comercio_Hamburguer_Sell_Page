import { PageContainer } from '../../components/MainComponents'
import { useState, useEffect} from 'react';
import { connect} from 'react-redux';
import { changeCart } from '../../actions/cartAction';
import axios from 'axios';
import Options__Children__Counter from '../../components/counter/Counter';
import { Options__Divider,Options__Children__Counter__Big, Options__Buy, Options__Children, Options__Header, HamburgerContainer, HamburgerContainer__Image, Options, ContainerInline, HamburgerContainer__ProductTitle, HamburgerContainer__ProductDescription, HamburgerContainer__ProductPrice, HamburgerContainer__OldPrice } from './ProductStyle'


    
    const Product = (props) => { 
      
  
    const aparecerModal = ()=>{
      document.querySelector('#displayNone1').classList.remove('displaynone');
      document.querySelector('#displayNone2').classList.remove('displaynone');
    setTimeout(()=>{
      document.querySelector('#displayNone1').classList.toggle('displaynone');
      document.querySelector('#displayNone2').classList.toggle('displaynone');
    },3000)
    }
  
    //Faz o ciclo de vida
    useEffect(()=>{
      requisicao_hamburger();
    
    },[])
  
    const [hamburguer, setHamburguer] = useState([]);
    const [adicionais, setAdicionais] = useState([]);
    const requisicao_hamburger = async () => {
      try {
        axios.get('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
        .then((resultado)=>{setHamburguer(resultado.data[0])
        return resultado;
        }).then(resultado => setAdicionais(resultado.data[0].ingredients[0].itens));
      } catch (error) {
        console.error(error);
      }
    }
  
  const [contadorHamburger, setContadorHamburguer] = useState(0);
  
 
  console.log(hamburguer) 
  return (
    <PageContainer>
      <HamburgerContainer>
        <HamburgerContainer__Image>
          <img src={'./img/HamburgaoShow.png'}></img>
        </HamburgerContainer__Image>
        <HamburgerContainer__ProductTitle>
        {hamburguer.nm_product}
        </HamburgerContainer__ProductTitle>
        <HamburgerContainer__ProductDescription>
        {hamburguer.description}
        </HamburgerContainer__ProductDescription>
        <ContainerInline>
          <HamburgerContainer__ProductPrice>
            R${hamburguer.vl_discount}
          </HamburgerContainer__ProductPrice>
          <HamburgerContainer__OldPrice>
          R${hamburguer.vl_price}
          </HamburgerContainer__OldPrice>
        </ContainerInline>
      </HamburgerContainer>
      <Options>
        <Options__Divider>
          <Options__Header>
            <p>Adicionar Ingredientes</p>
            <span>Até 8 ingredientes</span>
          </Options__Header>
          {
            adicionais.map((item)=>{
              return(
                <Options__Children>
            <span>{item.nm_item}</span>
          <Options__Children__Counter/>
            <span className='orangeText'>+ R${item.vl_item.toFixed(2)}</span>
          </Options__Children>                
              )
            })
          }
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
                <button type="button" onClick={()=>{
                  if(contadorHamburger === 0){
                    window.alert('Não pode ser abaixo de 0 items')
                  }else{
                    setContadorHamburguer(contadorHamburger - 1)}
                  }
                  } >&minus;</button>
                <span>{contadorHamburger}</span>
                <button type="button" onClick={()=>{setContadorHamburguer(contadorHamburger + 1)}}>&#43;</button>
              </div>
            </Options__Children__Counter__Big>
            <button className='addButton' onClick={()=>{
              if(contadorHamburger === 0){
                    window.alert('Primeiro Selecione a quantidade!')
              }else{
              props.changeCart(props.cart.cart+contadorHamburger);
              aparecerModal()
             }
             }}>Adicionar</button>
          </Options__Buy>
        </Options__Divider>
      </Options>
   
    </PageContainer>
    
  );
 
}

const mapStateToProps = (state) => ({
    cart:state.cart
})
const mapActionsToProps =  {
    changeCart
}

export default connect (mapStateToProps,mapActionsToProps)(Product);