import React from "react";

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

import chargers from '../images/chargers.png'
import chiefs from '../images/chiefs.png'
import broncos from '../images/broncos.png'
import raiders from '../images/raiders.png'
import dolphins from '../images/dolphins.png'
import bills from '../images/bills.png'
import patriots from '../images/patriots.png'
import jets from '../images/jets.png'
import steelers from '../images/steelers.png'
import bengals from '../images/bengals.png'
import ravens from '../images/ravens.png'
import browns from '../images/browns.png'
import titans from '../images/titans.png'
import colts from '../images/colts.png'
import texans from '../images/texans.png'
import jaguars from '../images/jaguars.png'

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

        <Card nomeTime="Baltimore Ravens" Logo={ravens} />
        <Card nomeTime="Cincinnati Bengals" Logo={bengals} />
        <Card nomeTime="Cleveland Browns" Logo={browns} />
        <Card nomeTime="Pittsbrgh Steelers" Logo={steelers} />

        <Card nomeTime="Buffalo Bills" Logo={bills} />
        <Card nomeTime="Miami Dolphins" Logo={dolphins} />
        <Card nomeTime="New England Patriots" Logo={patriots} />
        <Card nomeTime="New York Jets" Logo={jets} />

        <Card nomeTime="Denver Broncos" Logo={broncos} />
        <Card nomeTime="Kansas City Chiefs" Logo={chiefs} />
        <Card nomeTime="Las Vegas Raiders" Logo={raiders} />
        <Card nomeTime="Los Angeles Chargers" Logo={chargers} />

        <Card nomeTime="Houston Texans" Logo={texans} />
        <Card nomeTime="Indianapolis Colts" Logo={colts} />
        <Card nomeTime="Jacksonville Jaguars" Logo={jaguars} />
        <Card nomeTime="Tennessee Titans" Logo={titans} />
    </div>
