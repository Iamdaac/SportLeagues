import React from 'react';
import '../../static/css/style.css';
import '../../static/img/Sport_LeaguesNW.png';
import '../../static/img/contactoBGOP1.jpg';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import Patrocinadores from '../../components/patrocinadores/patrocinadores';
import LigasActivas from '../../components/ligas/ligasActivas';

export const EstadisticasHome = () => {
    return (
        <>  
            {/* Seccion Barra de Navegacion */}
            <Navbar />
            <section className="container overflow-hidden mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h1 className="fs-10 mb-3 text-dark text-uppercase text-center">Estadísticas</h1>
                    </div>
                    <p className="lead text-center fs-4">Toda la Información relacionada a la temporada actual, la puedes encontrar aquí.</p>
                    <p className="lead text-center fs-4">Selecciona la liga que deseas ver.</p>

                    {/* Seccion Basketball */}
                    <div className="container-father container-fluid w-100">
                        <div className="container-fluid">
                            <div className="container-fluid backgroundB-image mb-2" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1626003573503-2e088d82c647?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
                                <div className="container-basket container-fluid">
                                    <h2 className="pt-5 pb-2 text-white text-uppercase">Basketball</h2>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                    <LigasActivas />
                                    <LigasActivas />
                                    <LigasActivas />
                                    <LigasActivas />
                                    <LigasActivas />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seccion Football */}
                    <div className="container-fluid">
                        <div className="container-fluid backgroundF-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506626637585-0802df0d0269?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
                            <div className="container-football container-fluid mb-2">
                                <h2 className="pt-5 pb-1 text-white text-uppercase">Football</h2>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                <LigasActivas />
                                <LigasActivas />
                                <LigasActivas />
                                <LigasActivas />
                                <LigasActivas />
                            </div>
                        </div>
                    </div>
                                
                </div>
            </section>
            {/* Seccion Banner */}
            <Banner />
            {/* Seccion Patrocinadores */}
            <Patrocinadores />
            {/* Seccion Pie de Pagina */}
            <Footer />
        </>
    );
};
