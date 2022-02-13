import React from 'react';
import ReactDom from 'react-dom';
import './reset.css';
import './App.css';

import Nav from './components/nav.jsx'
import Conferencia from './components/conferencia.jsx'
import Header from './components/header.jsx'
import Exibicao from './components/exibicaoNFC.jsx'

function App() {
  return (
    <> 
      <Nav />
      <Conferencia />
    </>
  );
}

export default App;
