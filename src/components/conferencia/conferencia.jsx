import React, { useState, useEffect } from "react";
import './conferencia.css';
import ExibicaoNFC from '../exibicao/exibicaoNFC.jsx'
import ExibicaoAFC from "../exibicao/exibicaoAFC.jsx";
import Aos from "aos";
import 'aos/dist/aos.css'

import nfc from '../../images/conf/nfc.png'
import afc from '../../images/conf/afc.png'


function Conferencia() {
    const [listaNFC, setListaNFC] = useState()
    const [listaAFC, setListaAFC] = useState()

    useEffect(() => { Aos.init({ duration: 1000 }) }, [])

    function ExibirNFC(e) {
        setListaNFC(true)
        setListaAFC(false)
    }

    function ExibirAFC(e) {
        setListaAFC(true)
        setListaNFC(false)
    }

    return (
        <div className="Principal" data-aos="fade-up">
            <div className="Corpo">
                <div className="Apresentacao">
                    <div className="Titulo">
                        <h3>Conheça a NFL!</h3>
                    </div>
                    <div className="Texto">
                        <p>Sejam muito bem-vindos e bem-vindas! Esta página tem o objetivo de apresentar cada um dos 32 times da National Football League.</p>
                        <p>A liga é divida em duas Conferências (AFC e NFC), cada uma com 16 times.</p>
                        
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