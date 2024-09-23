import React from 'react';
import BarraLateral from '../../components/adminPanel/Navbar/barraLateral';
import Carusel from '../../components/adminPanel/Carusel/caruselAdmin';
import BotonNuevaLiga from '../../components/adminPanel/Botones/LigaEditar/btnNuevaLiga';
import Imagenes from '../../components/adminPanel/imagenes/bancoImagenes';
import AgregarImagen from '../../components/adminPanel/Botones/editarImagenes/agregarImagen';
import EliminarImagen from '../../components/adminPanel/Botones/editarImagenes/eliminarImagen';

export const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <BarraLateral />
            <div className="main-content">
                <h1>Panel de Administración</h1>
                <Carusel />
                <BotonNuevaLiga />

                <Imagenes />

                <div className="acciones">
                    <h2>Acciones Rápidas</h2>
                    <AgregarImagen />
                    <EliminarImagen />
                </div>
            </div>
        </div>
    );
};
