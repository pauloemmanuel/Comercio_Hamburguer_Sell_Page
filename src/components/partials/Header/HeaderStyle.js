import styled from 'styled-components'

export const HeaderBox  = styled.header`
width:100vw;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
background-color:#E5E5E5;
padding: 16px 40px;
align-items: center;
position:relative;
z-index:1;

`

export const HeaderBox__Container = styled.div`

flex-align:flex-end;
z-index:1;
position:relative;
display:flex;
margin-left:auto;
overflow:hidden;
overflow-x:visible;
overflow-y:visible;

@media(max-width: 768px){
  display:none;
}
`

export const HeaderBox__Logo = styled.div`
margin-right:24px;

img{ 
  width:230px;
}
@media(max-width: 1024px){
  margin:auto;
  img{
    width:150px;
   
    }
}
`
export const HeaderBox__SelectAddress = styled.div`
margin-right:24px;
display:flex;
width:14.3rem;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
height:48px;
border-radius: 4px;
background-color:#FFFFFF;
font-size:12px;
line-height:20px;
padding: 4px 8px;
position:relative;
overflow:visible;
justify-content:space-between;
span .orangeText{
  color:#D80000;
  font-weight:500;
}
img{
  width:12px;
  margin:4px 8px;
  cursor:pointer;
}
ul{
  display:none;
  list-style:none;
  overflow:visible;
  position:absolute;
  top:30px;
  left:0;
  width:100%;
  background-color:white;
  z-index:10;
}
li{
  cursor:pointer;
  margin-left:-30px;
  padding:2px 0px;
}
li:hover{
  color:#DDD;
}
`

export const HeaderBox__SearchInput = styled.div`
display:flex;
width:22.5rem;
border-radius: 4px;
border:1px solid #ED3237;  
font-size:14px;
margin-left: 8px;
height:48px;
background-color:white;
input{
  outline: none;
  width:90%;
  border: none;
  margin-left:12px;
  font-size:14px;
}
@media(max-width: 1200px){
  
  width:14rem;
}

`

export const HeaderBox__ImgPlusText = styled.div`
display:flex;
margin-left: 24px;
cursor:pointer;
color:#ED3237;
z-index:2;
font-size:16px;
img{
  margin-right:8px;
  max-width:40px
}

`
export const Header__Counter = styled.div`
  position:absolute;
  background-color:#F09035;
  width:1rem;
  margin-left:1.4rem;
  margin-top:0.2rem;
  z-index:1;
  padding-top:3px;
  padding-bottom:3px;
  text-align:center;
  color:white;
  font-size:12px;
  border-radius:50%;
  height:16px;
  line-height: 10px;
  
`