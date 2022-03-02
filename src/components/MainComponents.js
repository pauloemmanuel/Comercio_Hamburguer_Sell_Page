import styled from 'styled-components';

export const Template = styled.div`
`
export const PageContainer = styled.section`
max-width:1280px;
display:flex;
align-items:center;
margin:auto;
justify-items:space-between;
position:relative;
z-index:1;
@media(max-width:980px){
flex-flow:column nowrap;
}

`

export const PageTitle = styled.h1`
font-size:27px`;

export const PageBody = styled.section``

export const ErrorMessage = styled.div`
background-color:#FFCACA;
margin:10px;
color:black;
padding:5px 10px;
border:2px solid #FF0000;`

