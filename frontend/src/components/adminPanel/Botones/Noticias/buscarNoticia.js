import React from 'react';

const BuscarNoticia = () => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-center mx-auto pt-4" style={{ maxWidth: '95%' }}>
            <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon">
                    <i className="bi bi-search"></i>
                </div>
                <input
                    type="search"
                    id="form1"
                    className="form-control"
                    placeholder="Buscar Noticia"
                    aria-label="Search"
                />
            </div>
            <button className="btn btn-primary me-sm-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Nueva
            </button>
            <button className="btn btn-primary" type="button">
                Eliminar
            </button>
        </div>
    );
};

export default BuscarNoticia;
