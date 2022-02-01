import React from 'react';
import './reset.css';
import './components/card.css'
import './App.css';

import Card from './components/card.jsx'

import giants from './images/giants.png'
import chargers from './images/chargers.png'
import bears from './images/bears.png'
import packers from './images/packers.png'
import dolphins from './images/dolphins.png'
import chiefs from './images/chiefs.png'
import cowboys from './images/cowboys.png'
import eagles from './images/eagles.png'
import steelers from './images/steelers.png'
import bengals from './images/bengals.png'  
import niners from './images/niners.png'
import rams from './images/rams.png'


function App() { 
  return (
    <>
      	<Card nomeTime="New York Giants" Logo={giants} />
        <Card nomeTime="Dallas Cowboys" Logo={cowboys} />
        <Card nomeTime="Philadelphia Eagles" Logo={eagles} />
        <Card nomeTime="Chigado Bears" Logo={bears} />
        <Card nomeTime="Green Bay Packers" Logo={packers} />
        <Card nomeTime="Los Angeles Chargers" Logo={chargers} />
        <Card nomeTime="Kansas City Chiefs" Logo={chiefs} />
        <Card nomeTime="Miami Dolphins" Logo={dolphins} />
        <Card nomeTime="San Francisco 49ers" Logo={niners} />
        <Card nomeTime="Los Angeles Rams" Logo={rams} />
        <Card nomeTime="Cincinnati Bengals" Logo={bengals} />
        <Card nomeTime="Pittsbrgh Steelers" Logo={steelers} />
    </>
  );
}

export default App;
