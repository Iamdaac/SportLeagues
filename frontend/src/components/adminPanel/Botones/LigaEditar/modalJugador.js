import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function PlayersModal({ show, onHide, onShowTeamsModal }) {
    const [playerName, setPlayerName] = useState('');
    const [players, setPlayers] = useState([]);

    const handleAddPlayer = () => {
        if (playerName.trim()) {
        setPlayers([...players, playerName]);
        setPlayerName('');
        }
    };

    const handleEditPlayer = (index) => {
        const newName = prompt('Editar nombre del jugador', players[index]);
        if (newName && newName.trim()) {
        const updatedPlayers = [...players];
        updatedPlayers[index] = newName;
        setPlayers(updatedPlayers);
        }
    };

    const handleDeletePlayer = (index) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar a este jugador?')) {
        const updatedPlayers = players.filter((_, i) => i !== index);
        setPlayers(updatedPlayers);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>Jugadores</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-4 d-flex justify-content-center">
            <Form.Control
                type="text"
                placeholder="Nombre del Jugador"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
            </div>
            <Button variant="primary" onClick={handleAddPlayer}>
            Añadir
            </Button>
            <hr className="my-4" />
            {players.length > 0 ? (
            players.map((player, index) => (
                <div key={index} className="container-teams bg-white p-4 rounded shadow d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center">
                    <img
                    src="https://placehold.co/50x50"
                    alt="Avatar del jugador"
                    style={{ width: '50px', height: '50px' }}
                    className="me-3"
                    />
                    <div>
                    <h1 className="fs-5 mb-0">{player}</h1>
                    </div>
                </div>
                <div className="d-flex">
                    <Button
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => handleEditPlayer(index)}
                    >
                    Editar
                    </Button>
                    <Button
                    variant="outline-danger"
                    onClick={() => handleDeletePlayer(index)}
                    >
                    Eliminar
                    </Button>
                </div>
                </div>
            ))
            ) : (
            <p className="text-center">No hay jugadores añadidos.</p>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {
            onHide();
            onShowTeamsModal();
            }}>
            Volver
            </Button>
            <Button variant="primary" type="submit">
            Guardar
            </Button>
        </Modal.Footer>
        </Modal>
    );
}

export default PlayersModal;
