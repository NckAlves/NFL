import React from 'react';
import ReactDom from 'react-dom';
import './reset.css';
import './App.css';

import Header from './components/header.jsx'
import Exibicao from './components/exibicao.jsx'

function App() {
  return (
    <>
      <Header />
      <Exibicao />
    </>
  );
}

export default App;
