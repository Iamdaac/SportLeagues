import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LeagueModal({ show, onHide, onShowTeamsModal }) {
    return (
        <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>Nueva Liga</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-4 d-flex justify-content-center">
            <img
                id="selectedImage"
                src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                alt="example placeholder"
                style={{ width: '300px' }}
            />
            </div>
            <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
                <label className="form-label text-white m-1" htmlFor="customFile1">
                Choose file
                </label>
                <input
                type="file"
                className="form-control d-none"
                id="customFile1"
                onChange={(event) =>
                    displaySelectedImage(event, 'selectedImage')
                }
                />
            </div>
            </div>
            <Form>
            <Form.Group controlId="tituloLiga">
                <Form.Label>Titulo Liga:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="subtituloLiga">
                <Form.Label>Subtitulo:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="descripcionLiga">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                onInput={(event) => {
                    limitarPalabras(event.target, 200);
                    mostrarPalabrasRestantes(event.target, 200);
                }}
                />
                <div id="feedbackPalabrasRestantes"></div>
            </Form.Group>
            <Form.Group controlId="fechaInicio">
                <Form.Label>Inicio</Form.Label>
                <div className="input-group">
                <Form.Control type="text" readOnly />
                <Button variant="outline-secondary" id="toggleFechaInicio">
                    <i className="bi bi-calendar-date"></i>
                </Button>
                </div>
            </Form.Group>
            <Form.Group controlId="fechaFin">
                <Form.Label>Fin</Form.Label>
                <div className="input-group">
                <Form.Control type="text" readOnly />
                <Button variant="outline-secondary" id="toggleFechaFin">
                    <i className="bi bi-calendar-date"></i>
                </Button>
                </div>
            </Form.Group>
            <Form.Group controlId="reglasLiga">
                <Form.Label>Reglas</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
                variant="outline-primary"
                onClick={onShowTeamsModal}
                className="w-100 mt-3"
            >
                Equipos
            </Button>
            </Form>
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

export default LeagueModal;
