import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import { Template } from './components/MainComponents';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';
const store = createStore(Reducers);

const Page = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
    </Provider>
  );
}



export default Page;