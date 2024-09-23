import React from 'react';
import BarraLateral from '../../components/adminPanel/Navbar/barraLateral';
import PosicionEquiposBasket from '../../components/tablas/tablaEquipos'; 
import SiguientePartidoBasket from '../../components/tablas/tablaPartidos'; 
import ActualizarEstadisticaBasket from '../../components/adminPanel/Botones/Estadisticas/btnActualizarEstadisticas'; 
import ActualizarCalendarioBasket from '../../components/adminPanel/Botones/Calendario/btnActualizarCalendario'; 
import BasketPuntos from '../../components/adminPanel/tabla/tablaBasketPuntos'

const AdminBasketEstadistica = () => {
    return (
        <div className="d-flex">
            <BarraLateral />
            <div className="flex-fill">
                <div className="container my-4">
                    <h2 className="text-center">Administrar Estadísticas de Baloncesto</h2>
                    
                    <div className="mb-4">
                        <h3>Tabla de Equipos</h3>
                        <BasketPuntos />
                    </div>

                    <div className="mb-4">
                        <h3>Posición de Equipos</h3>
                        <PosicionEquiposBasket />
                    </div>

                    <div className="mb-4">
                        <h3>Siguiente Partido</h3>
                        <SiguientePartidoBasket />
                    </div>

                    <div className="d-grid gap-2">
                        <ActualizarEstadisticaBasket />
                        <ActualizarCalendarioBasket />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBasketEstadistica;
