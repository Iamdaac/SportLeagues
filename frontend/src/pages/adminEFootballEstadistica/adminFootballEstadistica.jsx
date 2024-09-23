import React from 'react';
import BarraLateral from '../../components/adminPanel/Navbar/barraLateral';
import TablaEquipos from '../../components/tablas/tablaPuntuacion';
import PosicionEquipos from '../../components/tablas/tablaEquipos';
import SiguientePartido from '../../components/tablas/tablaPartidos';
import ActualizarEstadistica from '../../components/adminPanel/Botones/Estadisticas/btnActualikarEstadisticas';
import ActualizarCalendario from '../../components/adminPanel/Botones/Calendario/btnActualizarCalendario';

const AdminFootballEstadistica = () => {
    return (
        <div className="d-flex">
            <BarraLateral />
            <div className="flex-fill">
                <div className="container my-4">
                    <h2 className="text-center">Administrar Estadísticas de Fútbol</h2>
                    
                    <div className="mb-4">
                        <h3>Tabla de Equipos</h3>
                        <TablaEquipos />
                    </div>

                    <div className="mb-4">
                        <h3>Posición de Equipos</h3>
                        <PosicionEquipos />
                    </div>

                    <div className="mb-4">
                        <h3>Siguiente Partido</h3>
                        <SiguientePartido />
                    </div>

                    <div className="d-grid gap-2">
                        <ActualizarEstadistica />
                        <ActualizarCalendario />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminFootballEstadistica;
