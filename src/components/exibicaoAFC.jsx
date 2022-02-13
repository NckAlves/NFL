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