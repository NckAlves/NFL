import React from 'react';
import './apresentacao.css';

export default (props) =>

    <div className='BoxInfo'>
        <h3>{props.nomeTime}</h3>
        <div className='Info'>
            <ul>
                <li>
                    <img src={props.Logo} width={60} />
                    <h4>Estádio</h4>
                </li>
                <li>
                    <h2>{props.titulos}</h2>
                    <h4>Super Bowls</h4>
                </li>
                <li>
                    <h4>Técnico</h4>
                </li>
                <li>
                    <h4>Destaques</h4>
                </li>
            </ul>
        </div>
    </div>