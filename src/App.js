import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import { Template } from './components/MainComponents';

const Page = () => {
  return (
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
  );
}



export default Page;