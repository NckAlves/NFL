import React, { useState } from 'react'
import './card.css'
import Apresentacao from './apresentacao'
import { render } from '@testing-library/react'

function Card(props) {

    const [time, setTime] = useState()
    const [titulo, setTitulo] = useState()
    const [exibicao, setExibicao] = useState()

    function apresentarTime(nomeTime) {
        setTime(props.time)
        setTitulo(props.titulos)
        console.log(props.nomeTime + ' ' + props.titulos)
        if (titulo === undefined) {
            console.log(props.titulos)
        }
        else {
            console.log(titulo)
        }
            
        setExibicao(true)
    }

    return (
        <div className='Card' onClick={apresentarTime}>
            <div className='Logo'>
                <img src={props.Logo} width={92} ></img>
            </div>
            <div className='Nome'>
                <h3>{props.nomeTime}</h3>
            </div>
            {exibicao && (<Apresentacao />)}
        </div>

    )
}
export default Card