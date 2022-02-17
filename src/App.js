import React from 'react';
import ReactDom from 'react-dom';
import './reset.css';
import './App.css';

import Nav from './components/nav.jsx'
import Conferencia from './components/conferencia.jsx'
import Header from './components/header.jsx'
import Exibicao from './components/exibicaoNFC.jsx'
import Logo from './images/background/logo.png'

function App() {
    return (
        <>
            <Nav />
            <Conferencia />
            <div className='Historia'>
                <img src={Logo} width={380}></img>
                <div className='BoxTexto'>
                    <h2>História da Liga</h2>

                    <p>A NFL foi fundada em 20 de agosto de 1920 com o nome de American Professional Football Association (APFA). A primeira temporada contou com 14 times, e o primeiro campeão da história da NFL foi o Akron Prós, que com 8 vitórias e 3 empates levou para casa a taça Brunswick-Balke Collender.
                    Em 1922 o nome da liga, então, foi alterado para o atual National Football League (NFL).</p>
                    
                    <p>A NFL era a maior liga de futebol americano e várias outras ligas foram criadas para brigar com o domínio da NFL, mas nenhuma havia conseguido, até que em 1960 foi criada a AFL, American Football League. Assim, essa nova liga começou a ganhar popularidade, contratos de TV e a disputar jogadores, inclusive os vindos da Universidade.</p>

                    <p>A briga entre as duas ligas continuou até 1966, quando então as ligas anunciaram que iriam se unir em uma única, fato que ocorreu definitivamente em 1970. Nesse meio tempo as equipes campeãs de cada liga disputavam uma partida para definir quem seria o campeão geral.</p>

                    <p>A NFL contou com algumas expansões para chegar até o formato atual com 32 times divididos em 2 conferências com 4 divisões cada. Em 1976 os Buccaneers e os Seahawks se juntaram à liga. Em 1995 foi a vez dos Jaguars e dos Panthers. Os últimos dois times a entrarem para a NFL foram o Ravens (1996) e o Texans (2002).</p>
                </div>
            </div>
        </>
    );
}

export default App;
