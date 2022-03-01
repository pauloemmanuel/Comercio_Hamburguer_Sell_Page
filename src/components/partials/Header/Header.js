import {HeaderBox,HeaderBox__Logo,HeaderBox__Container,HeaderBox__SelectAddress,HeaderBox__SearchInput,HeaderBox__ImgPlusText,Header__Counter} from './HeaderStyle'
import { PageContainer } from '../../MainComponents'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const [carrinho,setCarrinho] = useState(0);
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
    console.log(enderecos)
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
             if(index != 0){
              return(
                <li onClick={()=>{mudarEnderecos(index)}}>{item}</li>
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
            <Header__Counter>{carrinho}</Header__Counter>
            <img src='./img/CarrinhoCompras.svg'></img>
            <p>Carrinho</p>
            <div>
              
            </div>
          </HeaderBox__ImgPlusText>
        </HeaderBox__Container>
      </PageContainer>
    </HeaderBox>
    
  )
}

export default Header