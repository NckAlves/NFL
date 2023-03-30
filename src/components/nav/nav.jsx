import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import './nav.css'

function Nav() {
    useEffect(() => { Aos.init({ duration: 1000 }) }, [])

    return (
        <div className="Nav" data-aos="fade-down">
            <h3 className="Bemvindo">Bem-Vindo à NFL!</h3>
            <div className="Botoes">
                <button>Site Oficial</button>
                <button>AFC</button>
                <button>NFC</button>
            </div>
        </div>
    )
}

export default Nav