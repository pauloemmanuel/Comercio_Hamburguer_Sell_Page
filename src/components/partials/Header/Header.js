import {HeaderBox__Modal,HeaderBox__Modal__Arrow,HeaderBox,HeaderBox__Logo,HeaderBox__Container,HeaderBox__SelectAddress,HeaderBox__SearchInput,HeaderBox__ImgPlusText,Header__Counter} from './HeaderStyle'
import { PageContainer } from '../../MainComponents'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  
  const alternarModal = ()=>{
    document.querySelector('#displayNone1').classList.toggle('displaynone');
    document.querySelector('#displayNone2').classList.toggle('displaynone');
  }


  const [cart,setCart] = useState(props.cart.cart);


  useEffect(()=>{
      setCart(props.cart.cart);
     
  },[props.cart.cart]);

  const [enderecos,setEnderecos] = useState(['R. Antonio Braune, 222','Rua Jorge Amado,821','Avenida Freitas Silvas,981','R. Maria Bernades, 819'])
  const [enderecoAtual,setEnderecoAtual] = useState(enderecos[0]);
  const exibirEnderecos = () => {
   let el = document.querySelector('#enderecos');
   if(el.style.display == 'block'){
     el.style.display = 'none'
   }else{
    el.style.display = 'block'
   }
  }
  function mudarEnderecos(index){
    let novosEnderecos = enderecos;
    let respiro = novosEnderecos[0];
    novosEnderecos[0] = novosEnderecos[index];
    novosEnderecos[index] = respiro;
    setEnderecos(novosEnderecos);
    setEnderecoAtual(novosEnderecos[0])
  
  }

  return(
   
    <HeaderBox>
     <PageContainer>
        <HeaderBox__Logo>
          <Link to='/'><img src='./img/DeliverizeLogo.png'></img></Link>
        </HeaderBox__Logo>
        <HeaderBox__Container>
          <HeaderBox__SelectAddress  onClick={exibirEnderecos}>  
            <span><span className="orangeText">Entrega:</span> <br/>
            {enderecoAtual}
            </span>
           <img src='./img/SetaParaBaixoLaranja.svg'></img>
           <ul id='enderecos'>
           {enderecos.map((item,index)=>{
             if(index !== 0){
              return(
                <li key={index} onClick={()=>{mudarEnderecos(index)}}>{item}</li>
              );}
           })}
            
           
           </ul>
          </HeaderBox__SelectAddress>
          <HeaderBox__SearchInput>
            <input placeholder='Busque por estabelecimentos ou produtos' type='text'></input>
          </HeaderBox__SearchInput>
          <HeaderBox__ImgPlusText>
            <img src='./img/ImagemUsuario.svg'></img>
            <p>Entrar</p>
          </HeaderBox__ImgPlusText>
          <HeaderBox__ImgPlusText>
            <Header__Counter >{cart}</Header__Counter>
            <label style={{display:'flex',cursor:'pointer'}} onClick={alternarModal}>
            <img src='./img/CarrinhoCompras.svg'></img>
            <p>Carrinho</p>
           
            </label>
            <HeaderBox__Modal__Arrow  className='displaynone' id='displayNone1'/>
            <HeaderBox__Modal className='displaynone' id='displayNone2'>
              <div className='orangeBar'>
                Adicionado Com Sucesso
              </div>
             
              <div className='modal__Content'>
               <div className='modal__Title'>Oferta Cheddar Bacon</div> 
               <br/>
               Ingredientes:
               <ul>
                  <li>1 Carne 250gr</li>
                  <li>2 Queijo Cheddar</li>
                  <li>1 Bacon</li>
                  <li>Molho Especial</li>
               </ul>
              </div>
            </HeaderBox__Modal>
          </HeaderBox__ImgPlusText>
        </HeaderBox__Container>
      </PageContainer>
    </HeaderBox>
    
  )
}
const mapStateToProps = (state) => ({
  cart:state.cart
})


export default connect (mapStateToProps)(Header);