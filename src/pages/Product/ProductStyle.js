import styled from 'styled-components'

export const HamburgerContainer = styled.main`
display:flex;
flex-flow:column nowrap;
position:relative;
z-index:1;

padding:22px;
padding-top:48px;
width:50%;
@media(max-width:980px){
  max-width:100%;
  width:100vw;
  margin:auto;


}
`

export const HamburgerContainer__Image = styled.div`
width:600px;
position:relative;
z-index:1;
@media(max-width:1200px){
  margin-left:-68px;
  @media(max-width:980px){
   img{
    width:auto;
    height:100%;
   } 
   display:flex;
   justify-content:center;
   width: 90%;
   margin:auto;
   height:130px;
}
}

`
export const HamburgerContainer__ProductTitle = styled.div`
font-size:28px;
font-weight:600;
padding-top:24px;
color:#4E4E4E;
padding-left:8px;
@media(max-width:980px){
  font-size:18px;
}
`
export const HamburgerContainer__ProductDescription = styled.div`
font-size:20px;
font-weight:400;
padding-top:24px;
padding-left:8px;
color:#4E4E4E;
@media(max-width:980px){
  font-size:16px;
}
`
export const HamburgerContainer__ProductPrice = styled.div`
font-size:32px;
font-weight:400;
padding-top:24px;
padding-left:8px;
color:#DC6E05;
@media(max-width:980px){
  font-size:14px;
  padding-top:15px;
}
`
export const HamburgerContainer__OldPrice = styled.div`
font-size:32px;
font-weight:400;
padding-top:24px;
color:#4E4E4E;
margin-left:20px;
text-decoration: line-through;
@media(max-width:980px){
  font-size:14px;
  padding-top:15px;
}
`

export const Options = styled.div`
display:flex;
flex-flow:column nowrap;
margin:auto;
margin-top:24px;
margin-right:24px;
width:440px;
border:1px solid #686868;
padding:32px;
padding-right:28px;
font-weight:500;
height:50rem;
border-radius: 8px;
max-height:39rem;
padding-bottom:0px;
@media(max-width:980px){
  height:fit-content;
  max-height:9999px;
  border:none;
  max-width:100vw;
  width:100%;
  margin:auto;
  padding:20px;
  padding-top:5px;

}
`
export const Options__Divider = styled.div`
display:flex;
flex-direction:column;
overflow:auto;
max-height:31.5rem;

@media(max-width:980px){
  height:100%;
  max-height:100%;
}
`

export const Options__Header = styled.div`
background-color: rgba(253, 215, 14, 0.2);
padding-bottom:10px;
padding-left:20px;
padding-top:12px;
margin-bottom:10px;
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
padding:24px;
padding-left:0px;
margin-right:10px;
margin-left:10px;
margin-top:-20px;
margin-bottom:10px;
height:105px;
font-size:14px;
border-bottom:1px solid #F09035;

&:last-child{
  border-bottom:0px solid #F09035;
  margin-top:-10px;
}
.orangeText{
  color:#F09035;
  font-weight:500;
  padding-bottom:0px;
}

label{
display:flex;    
padding:0;
margin:-4px;
margin-left:10px;
position:relative;
font-size:16px;
line-height:24px;
font-weight:400;
justify-content:space-between;
  span{
    position:relative;
    display:inline;
    cursor:pointer;
    margin-bottom:-20px;
 
  }
  input {
    cursor:pointer;
    margin:0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid orange;
    transition: 0.2s all linear;
    position: relative;
    -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
  }

  input:checked {
    box-shadow: inset 0 0 0 3px white;
    border-color: orange;
     background:orange;
   
  }
}


`
export const Options__Children__Counter = styled.div`
  position:relative;
  display:block;
  margin-left:auto;
  margin-right:-20px;
  width: 90px;
.input-number {
  position: relative;
 
  width: 100%;
  display:flex;
  align-itens:center;
  height: 32px;
  background-color: white;
  overflow: hidden;
  margin: 2px;
  border-radius:5px;
  border:1px solid #F09035;
}

.input-number span {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  display: inline-block;
  background-color: white;
  height: 100%;
  width: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  color: #4E4E4E;
  letter-spacing: -1px;
}
.input-number button {
  display: inline-block;
  width: 50px;
  height: 100%;
  border: none;
  color: #D80000;
  cursor:pointer;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(255,255,255,.2);
  transition: background-color .2s ease;
  font-size: 24px;
  
}
}

.input-number button:nth-of-type(1) {
  padding-right: 20px
}

.input-number button:nth-of-type(2) {
  padding-left: 20px;
}

`

export const Options__Children__Counter__Big = styled.div`
  position:relative;
  display:block;
  width: 140px;

.input-number {
  position: relative;
  width: 100%;
  display:flex;
  align-itens:center;
  height: 40px;
  background-color: white;
  overflow: hidden;
  border-radius:5px;
  border:1px solid #F09035;
}

.input-number span {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  display: inline-block;
  background-color: white;
  height: 100%;
  width: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #4E4E4E;
  letter-spacing: -1px;
}
.input-number button {
  display: inline-block;
  width: 50px;
  height: 100%;
  border: none;
  color: #D80000;
  cursor:pointer;
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(255,255,255,.2);
  transition: background-color .2s ease;
  font-size: 30px;
}

.input-number button:nth-of-type(1) {
  padding-right:20px
}

.input-number button:nth-of-type(2) {
  padding-left: 60px;
}

.input-number button:hover {
  background-color: rgba(255,255,255,.25);
}`

export const Options__Buy = styled.div`
padding-top:24px;

display:flex;
align-itens:center;
width:100%;
justify-content:space-between;
overflow:hidden;

.addButton{
  line-height: 40px;
  width:220px;
  background-color: #F09035;
  padding:2px;
  height:40px;
  color:white;
  cursor:pointer;
  border:none;
  border-radius:4px;
  &:hover{
    background-color: #FF9955;
  }
  @media(max-width:980px){
    width:200px;
  }
  @media(max-width:375px){
    width:175px;
  }
  @media(max-width:320px){
    width:120px;
  }
}
`



export const ContainerInline = styled.div`
display:flex;
`


