import React from 'react';
import { Actions } from '@twilio/flex-ui';
import './scoreboard.css';

class Scoreboard extends React.Component {
    render() {
        return (
            <div className="scoreboard">
                <h3 className="titleScoreboard">Você Venceu!</h3>
                <img className="imageTrophy" src="https://jogovelha-1096.twil.io/trofeu.svg" />
                <button className="buttonScoreboard" type="button" 
                onClick={() => click()}>Jogar novamente</button>
            </div>
        );
    }
}

function click() {
    Actions.invokeAction('NavigateToView', { viewName: 'jogo-velha'});
}

export default Scoreboard;