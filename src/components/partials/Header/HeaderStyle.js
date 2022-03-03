import styled from 'styled-components'

export const HeaderBox  = styled.header`
width:100vw;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
background-color:#E5E5E5;
padding: 16px 40px;
align-items: center;
position:relative;
z-index:2;
`
export const HeaderBox__Container = styled.div`
flex-align:flex-end;
z-index:2;
position:relative;
display:flex;
margin-left:auto;
overflow:hidden;
overflow-x:visible;
overflow-y:visible;

@media(max-width: 980px){
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
z-index:11;
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
  margin-top:11px;
  left:0;
  width:100%;
  padding-top:8px;
  background-color:white;
  z-index:10;
  border-radius:0px 0px 10px 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);

}
li{
  cursor:pointer;
  margin-left:8px;

  padding:8px 0px;
  position:relative;
  z-index:10;

}
li:hover{
  color:#AAA;
  position:relative;
  z-index:10;
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
align-itens:center;

.displaynone{
  display:none;
}
img{
  margin-right:8px;
  max-width:40px
}
p{
  margin:auto;
}

`
export const Header__Counter = styled.div`
  position:absolute;
  background-color:#F09035;
  width:1rem;
  margin-left:1.8rem;
  margin-top:-0.1rem;
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

export const HeaderBox__Modal__Arrow = styled.div`
  display:block;
position: absolute;
margin-top:43px;
margin-left:13px;
z-index:2;
padding:4px;
width:18px;
height:18px;
background-color:#F09035;
transform: rotate(45deg);

`
export const HeaderBox__Modal = styled.div`
 display:block;
position: absolute;
margin-top:51px;
margin-left:calc(-208px + 116px);
cursor:default;
width:220px;
height:fit-content;
border-radius: 4px 4px 0px 0px;
filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));

.orangeBar{
 
  background-color:#F09035;
  width:100%;
  height:fit-content;
  color:white;
  margin-top:-2px;
  padding:5px;
  border-radius: 4px 4px 0px 0px;
  padding-top:9px;
  padding-bottom:5px;
  font-size:18px;
  font-weight:600;
}
.modal__Content{
  width: 100%;
  background-color:#F8F8F8;
  height:120px;
  padding:8px 11px;
  color:#4E4E4E;
  font-size:12px;
}
.modal__Title{
 color:#BC2E31;
 font-size:16px;
 font-weight: bold;
 line-height: 100%;
 font-style: normal;
 margin-bottom:-8px;
}
ul{
 padding:20px;
 margin-top:-12px;
}
`