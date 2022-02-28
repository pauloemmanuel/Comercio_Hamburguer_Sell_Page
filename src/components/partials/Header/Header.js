import {HeaderBox,HeaderBox__Logo,HeaderBox__Container,HeaderBox__SelectAddress,HeaderBox__SearchInput,HeaderBox__ImgPlusText,Header__Counter} from './HeaderStyle'
import { PageContainer } from '../../MainComponents'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const [carrinho,setCarrinho] = useState(0);

  const exibirEnderecos = () => {
   let el = document.querySelector('#enderecos');

   if(el.style.display == 'block'){
     console.log('a'+el.style.display)
     el.style.display = 'none'
   }else{
    console.log('b'+el.style.display)
    el.style.display = 'block'
   }
  }

  return(
   
    <HeaderBox>
     <PageContainer>
        <HeaderBox__Logo>
          <Link to='/'><img src='./img/DeliverizeLogo.png'></img></Link>
        </HeaderBox__Logo>
        <HeaderBox__Container>
          <HeaderBox__SelectAddress>  
            <span><span class="orangeText">Entrega:</span> <br/>
            R. Antonio Braune, 222
            </span>
           <img onClick={exibirEnderecos} src='./img/SetaParaBaixoLaranja.svg'></img>
           <ul id='enderecos'>
            <li>Endereço 2</li>
            <li>Endereço 3</li>
            <li>Endereço 4</li>
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
            <Header__Counter>{carrinho}</Header__Counter>
            <img src='./img/CarrinhoCompras.svg'></img>
            <p>Carrinho</p>
          </HeaderBox__ImgPlusText>
        </HeaderBox__Container>
      </PageContainer>
    </HeaderBox>
    
  )
}

export default Header