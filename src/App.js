import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import {Template} from './components/MainComponents';



const Page = (props) => {
  return(
    <BrowserRouter>
    <Template>
      <Routes/>
    </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
    cart:state.cart
  };
}
const mapDispatchToProps = (dispatch)=>{
  return{};
}

export default connect (mapStateToProps,mapDispatchToProps)(Page);