import React from 'react'
import './card.css'

export default (props) => 
    <div className='Card'>
        <div className='Logo'>
            <img src={props.Logo} width={92}></img>
        </div>
        <div className='Nome'>
            <h3>{props.nomeTime}</h3>
        </div>

    </div>