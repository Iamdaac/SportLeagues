import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function TeamsModal({ show, onHide, onShowPlayersModal }) {
    return (
        <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>Equipos Participantes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row w-100">
            <div className="col-md-8 d-flex align-items-center">
                <Form.Control type="text" placeholder="Nombre del Equipo" />
            </div>
            <div className="col d-flex align-items-center justify-content-center w-100">
                <Button variant="primary">Añadir</Button>
            </div>
            </div>
            <hr className="w-100 mx-auto border-dark-subtle" />
            {/* Aquí puedes mapear los equipos */}
            <div className="container-teams bg-white p-4 rounded shadow d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img
                src="https://placehold.co/50x50"
                alt="Logo del equipo"
                style={{ width: '50px', height: '50px' }}
                className="me-3"
                />
                <div>
                <h1 className="fs-5 mb-0">Nombre del equipo</h1>
                <p className="fs-6 text-muted mb-0">
                    Total de jugadores: [Número de jugadores]
                </p>
                </div>
            </div>
            <div className="dropdown">
                <Button
                variant="outline-dark"
                className="dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <i className="bi bi-three-dots"></i>
                </Button>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                    <Button
                    variant="link"
                    className="dropdown-item"
                    onClick={onShowPlayersModal}
                    >
                    Añadir Jugador
                    </Button>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <Button variant="link" className="dropdown-item">
                    Eliminar
                    </Button>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <Button variant="link" className="dropdown-item">
                    Editar
                    </Button>
                </li>
                </ul>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
            Cancelar
            </Button>
            <Button variant="primary" type="submit">
            Guardar
            </Button>
        </Modal.Footer>
        </Modal>
    );
}

export default TeamsModal;
