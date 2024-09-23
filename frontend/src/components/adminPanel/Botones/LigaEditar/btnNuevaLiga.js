import React, { useState } from 'react';
import LeagueModal from './modalLiga';
import TeamsModal from './modalEquipos';
import PlayersModal from './modalJugador';
import { displaySelectedImage, limitarPalabras, mostrarPalabrasRestantes } from './helpers';

function App() {
    const [showLeagueModal, setShowLeagueModal] = useState(false);
    const [showTeamsModal, setShowTeamsModal] = useState(false);
    const [showPlayersModal, setShowPlayersModal] = useState(false);

    return (
        <div className="App">
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowLeagueModal(true)}
        >
            Nueva Liga
        </button>

        <LeagueModal
            show={showLeagueModal}
            onHide={() => setShowLeagueModal(false)}
            onShowTeamsModal={() => {
            setShowLeagueModal(false);
            setShowTeamsModal(true);
            }}
            displaySelectedImage={displaySelectedImage}
            limitarPalabras={limitarPalabras}
            mostrarPalabrasRestantes={mostrarPalabrasRestantes}
        />

        <TeamsModal
            show={showTeamsModal}
            onHide={() => setShowTeamsModal(false)}
            onShowPlayersModal={() => {
            setShowTeamsModal(false);
            setShowPlayersModal(true);
            }}
        />

        <PlayersModal
            show={showPlayersModal}
            onHide={() => setShowPlayersModal(false)}
            onShowTeamsModal={() => {
            setShowPlayersModal(false);
            setShowTeamsModal(true);
            }}
        />
        </div>
    );
}

export default App;
