import React from 'react';
import BarraLateral from '../../components/adminPanel/Navbar/barraLateral';
import CaruselAdmin from '../../components/adminPanel/Carusel/caruselAdmin';
import Noticia from '../../components/adminPanel/Botones/Noticias/componentePrincipalN';
import ContenedorNoticia from '../../components/adminPanel/contenedorNoticia/contenedorNoticia';

export const AdminNoticia = () => {
    return (
        <div className="d-flex">
            <BarraLateral />
            <div className="flex-fill">
                <CaruselAdmin />
                <div className="container my-4">
                    <h2 className="text-center">Administrar Noticias</h2>
                    <ContenedorNoticia>
                        {/* Aquí puedes mapear una lista de noticias o insertar noticias manualmente */}
                        <Noticia
                            title="Título Noticia 1"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente doloribus."
                            logo="https://placehold.co/150x150"
                        />
                        <Noticia
                            title="Título Noticia 2"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente doloribus."
                            logo="https://placehold.co/150x150"
                        />
                        <Noticia
                            title="Título Noticia 3"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente doloribus."
                            logo="https://placehold.co/150x150"
                        />
                    </ContenedorNoticia>
                </div>
            </div>
        </div>
    );
};
