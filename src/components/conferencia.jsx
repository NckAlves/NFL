import React, { useState } from "react";
import './conferencia.css';
import ExibicaoNFC from './exibicaoNFC.jsx'
import ExibicaoAFC from "./exibicaoAFC";

import nfc from '../images/conf/nfc.png'
import afc from '../images/conf/afc.png'


function Conferencia() {
    const [listaNFC, setListaNFC] = useState()
    const [listaAFC, setListaAFC] = useState()

    function ExibirNFC(e) {
        setListaNFC(true)
        setListaAFC(false)
    }

    function ExibirAFC(e) {
        setListaAFC(true)
        setListaNFC(false)
    }

    return (
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
                        <p>Não é só isso! Abaixo você tem mais informações sobre a liga, seus jogos e regras.</p>
                        <p>Aproveite!</p>
                    </div>
                </div>
                <div className="Box">
                    <div className="Page" onLoad={ExibirAFC}>
                        <img src={afc} onClick={ExibirAFC} />
                        <img src={nfc} onClick={ExibirNFC} />
                    </div>

                    {listaAFC && ( <ExibicaoAFC /> )}
                    {listaNFC && ( <ExibicaoNFC /> )}

                </div>
            </div>

        </div>
    )
}

export default Conferencia