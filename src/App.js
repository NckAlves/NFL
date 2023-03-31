import React from 'react';
import './reset.css';
import './App.css';

import Nav from './components/nav/nav.jsx'
import Conferencia from './components/conferencia/conferencia.jsx'
import Historia from './components/historia/historia';
import Superbowl from './components/superbowl/superbowl';

function App() {
    return (
        <> 
            <Nav />
            <Conferencia />
            <Historia />
            <Superbowl />            
        </>
    );
}

export default App;
