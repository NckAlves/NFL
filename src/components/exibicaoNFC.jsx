import React from "react";
import './exibicao.css'
import Card from './card.jsx'

import bears from '../images/bears.png'
import packers from '../images/packers.png'
import vikings from '../images/vikings.png'
import lions from '../images/lions.png'
import giants from '../images/giants.png'
import cowboys from '../images/cowboys.png'
import eagles from '../images/eagles.png'
import washington from '../images/washington.png'
import seahawks from '../images/seahawks.png'
import cardinals from '../images/cardinals.png'
import niners from '../images/niners.png'
import rams from '../images/rams.png'
import saints from '../images/saints.png'
import bucs from '../images/bucs.png'
import panthers from '../images/panthers.png'
import falcons from '../images/falcons.png'


export default () =>

    <div className='Times'>
        <Card nomeTime="Chigado Bears" Logo={bears} />
        <Card nomeTime="Detroit Lions" Logo={lions} />
        <Card nomeTime="Green Bay Packers" Logo={packers} />
        <Card nomeTime="Minnesota Vikings" Logo={vikings} />

        <Card nomeTime="Dallas Cowboys" Logo={cowboys} />
        <Card nomeTime="New York Giants" Logo={giants} />
        <Card nomeTime="Philadelphia Eagles" Logo={eagles} />
        <Card nomeTime="Washigton Commanders" Logo={washington} />

        <Card nomeTime="Arizona Cardinals" Logo={cardinals} />
        <Card nomeTime="Los Angeles Rams" Logo={rams} />
        <Card nomeTime="San Francisco 49ers" Logo={niners} />
        <Card nomeTime="Seattle Seahawks" Logo={seahawks} />

        <Card nomeTime="Atlanta Falcons" Logo={falcons} />
        <Card nomeTime="Carolina Panthers" Logo={panthers} />
        <Card nomeTime="New Orleans Saints" Logo={saints} />
        <Card nomeTime="Tampa Bay Buccaneers" Logo={bucs} />
    </div>
