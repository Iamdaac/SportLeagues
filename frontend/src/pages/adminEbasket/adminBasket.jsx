import React from 'react';
import BarraLateral from '../../components/adminPanel/Navbar/barraLateral';
import ContenedorLiga from '../../components/adminPanel/Contenedor/contenedorLiga';
import Patrocinadores from '../../components/patrocinadores/patrocinadores';
import AgregarPatrocinador from '../../components/adminPanel/Botones/Patrocinador/agregarPatrocinador';
import EliminarPatrocinador from '../../components/adminPanel/Botones/Patrocinador/eliminarPatrocinador';

const AdminFootball = () => {
  return (
    <div className="d-flex">
      {/* Barra Lateral */}
      <div className="sidebar">
        <BarraLateral />
      </div>

      {/* Contenido Principal */}
      <div className="container-fluid">
        <h1 className="mt-4">Administración de Basket</h1>

        {/* Contenedor de Ligas */}
        <ContenedorLiga />

        {/* Lista de Patrocinadores */}
        <Patrocinadores />

        {/* Botones para agregar y eliminar patrocinadores */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
          <AgregarPatrocinador />
          <EliminarPatrocinador />
        </div>
      </div>
    </div>
  );
};

export default AdminFootball;
