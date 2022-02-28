import styled from 'styled-components'

export const HamburgerContainer = styled.div`
display:flex;
flex-flow:column nowrap;
padding:30px;
padding-top:48px;
width:50%;

`

export const HamburgerContainer__Image = styled.div`
width:600px;
@media(max-width:1200px){
  margin-left:-48px;
}
`
export const HamburgerContainer__ProductTitle = styled.div`
font-size:28px;
font-weight:600;
padding-top:24px;
color:#4E4E4E;
`
export const HamburgerContainer__ProductDescription = styled.div`
font-size:20px;
font-weight:400;
padding-top:24px;
color:#4E4E4E;
`
export const HamburgerContainer__ProductPrice = styled.div`
font-size:32px;
font-weight:400;
padding-top:24px;
color:#DC6E05;
`
export const HamburgerContainer__OldPrice = styled.div`
font-size:32px;
font-weight:400;
padding-top:24px;
color:#4E4E4E;
margin-left:20px;
text-decoration: line-through;
                         
`

export const Options = styled.div`
display:flex;
flex-flow:column nowrap;
margin:auto;
margin-top:40px;
margin-right:40px;
width:440px;
border:1px solid #686868;
padding:32px;
height:37rem;
border-radius: 8px;
overflow:auto;
`

export const Options__Header = styled.div`
background-color:rgba(253, 215, 14, 0.2);
padding-bottom:10px;
padding-left:20px;
p{
  font-size:14px; 
  color:#4E4E4E;
  font-weight:500;
  margin-bottom:4px;
}
span{
  font-size:12px;
  color:#E49700;
}
`
export const Options__Children = styled.div`
padding:20px;
`


export const ContainerInline = styled.div`
display:flex;
`


