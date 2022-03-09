import React from "react";
import './exibicao.css'
import Card from "./card.jsx";

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
    <div>
        <Card nomeTime="Baltimore Ravens" Logo={ravens} titulos='2' />
        <Card nomeTime="Cincinnati Bengals" Logo={bengals} titulos='0' />
        <Card nomeTime="Cleveland Browns" Logo={browns} titulos='0' />
        <Card nomeTime="Pittsbrgh Steelers" Logo={steelers} titulos='6' />

        <Card nomeTime="Buffalo Bills" Logo={bills} titulos='0' />
        <Card nomeTime="Miami Dolphins" Logo={dolphins} titulos='2' />
        <Card nomeTime="New England Patriots" Logo={patriots} titulos='6' />
        <Card nomeTime="New York Jets" Logo={jets} titulos='1' />

        <Card nomeTime="Denver Broncos" Logo={broncos} titulos='3' />
        <Card nomeTime="Kansas City Chiefs" Logo={chiefs} titulos='1' />
        <Card nomeTime="Las Vegas Raiders" Logo={raiders} titulos='3' />
        <Card nomeTime="Los Angeles Chargers" Logo={chargers} titulos='0' />

        <Card nomeTime="Houston Texans" Logo={texans} titulos='0' />
        <Card nomeTime="Indianapolis Colts" Logo={colts} titulos='2' />
        <Card nomeTime="Jacksonville Jaguars" Logo={jaguars} titulos='0' />
        <Card nomeTime="Tennessee Titans" Logo={titans} titulos='0' />
    </div>