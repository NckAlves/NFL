import React from "react";
import './exibicao.css'
import Card from '../card/card.jsx'

import bears from '../../images/bears.png'
import packers from '../../images/packers.png'
import vikings from '../../images/vikings.png'
import lions from '../../images/lions.png'
import giants from '../../images/giants.png'
import cowboys from '../../images/cowboys.png'
import eagles from '../../images/eagles.png'
import washington from '../../images/washington.png'
import seahawks from '../../images/seahawks.png'
import cardinals from '../../images/cardinals.png'
import niners from '../../images/niners.png'
import rams from '../../images/rams.png'
import saints from '../../images/saints.png'
import bucs from '../../images/bucs.png'
import panthers from '../../images/panthers.png'
import falcons from '../../images/falcons.png'

function exibicaoNFC() {
    return (
        <div className='Times'>
        <Card nomeTime="Chigado Bears" Logo={bears} titulos='1' />
        <Card nomeTime="Detroit Lions" Logo={lions} titulos='0' />
        <Card nomeTime="Green Bay Packers" Logo={packers} titulos='4' />
        <Card nomeTime="Minnesota Vikings" Logo={vikings} titulos='0' />

        <Card nomeTime="Dallas Cowboys" Logo={cowboys} titulos='5' />
        <Card nomeTime="New York Giants" Logo={giants} titulos='4' />
        <Card nomeTime="Philadelphia Eagles" Logo={eagles} titulos='1' />
        <Card nomeTime="Washigton Commanders" Logo={washington} titulos='3' />

        <Card nomeTime="Arizona Cardinals" Logo={cardinals} titulos='0' />
        <Card nomeTime="Los Angeles Rams" Logo={rams} titulos='2' />
        <Card nomeTime="San Francisco 49ers" Logo={niners} titulos='5' />
        <Card nomeTime="Seattle Seahawks" Logo={seahawks} titulos='1' />

        <Card nomeTime="Atlanta Falcons" Logo={falcons} titulos='0' />
        <Card nomeTime="Carolina Panthers" Logo={panthers} titulos='0' />
        <Card nomeTime="New Orleans Saints" Logo={saints} titulos='1' />
        <Card nomeTime="Tampa Bay Buccaneers" Logo={bucs} titulos='1' />
    </div>
    )
}

export default exibicaoNFC