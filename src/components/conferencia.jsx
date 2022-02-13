import React, { Fragment } from "react";
import './conferencia.css';
import ExibicaoNFC from './exibicaoNFC.jsx'
import ExibicaoAFC from "./exibicaoAFC";

import nfc from '../images/conf/nfc.png'
import afc from '../images/conf/afc.png'


export default ()  =>
    <div className="Principal">
        <div className="Corpo">
            <div className="Apresentacao">
                <div className="Titulo">
                    <h3>Conheça a NFL!</h3>
                </div>
                <div className="Texto">
                    <p>Sejam muito bem-vindos e bem-vindas! Esta página tem o objetivo de apresentar cada um dos 32 times da National Football League.</p>
                    <p>A liga é divida em duas Conferências (AFC e NFC), cada uma com 16 times.</p>
                    <p>Basta clicar no card de qualquer um dos times para ter as principais informações sobre ele.</p>
                    <p>Aproveite!</p>
                </div>
            </div>
            <div className="Box">
                <div className="Page">
                    <img src={nfc} />
                    <img src={afc} />
                </div>
                <ExibicaoNFC />
            </div>
        </div>

    </div>