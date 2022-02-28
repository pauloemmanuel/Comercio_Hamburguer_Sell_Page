import {PageContainer,Inline} from '../../components/MainComponents'
import {Options__Children,Options__Header,HamburgerContainer,HamburgerContainer__Image,Options,ContainerInline,HamburgerContainer__ProductTitle,HamburgerContainer__ProductDescription,HamburgerContainer__ProductPrice,HamburgerContainer__OldPrice} from './ProductStyle'
const Product = () =>{
  
  return(
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
        <Options__Header>
          <p>Adicionar Ingredientes</p>
          <span>Até 8 ingredientes</span>
        </Options__Header>
        <Options__Children>
          Queijo Cheddar
        </Options__Children>
      </Options>
    </PageContainer>
  );
}



export default Product;