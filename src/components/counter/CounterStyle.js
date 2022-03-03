import styled from "styled-components";


export const Children__Counter = styled.div`
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