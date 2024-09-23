import React from 'react'
import '../../static/css/style.css';
import '../../static/img/Sport_LeaguesNW.png';
import '../../static/img/contactoBGOP1.jpg';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import TablaEquipos from '../../components/tablas/tablaEquipos';
import TablaPuntuacion from '../../components/tablas/tablaPuntuacion';
import TablaPartidos from '../../components/tablas/tablaPartidos';
import Patrocinadores from '../../components/patrocinadores/patrocinadores';

export const estadisticas = () => {
    return (
        <>
            <Navbar />
            <Banner />

            {/* Seccion Logo y Video */}
            <div className="container mt-4">
                <div className="row gx-2 justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                    <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm">
                    <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="..." />
                    </div>
                </div>
                </div>
            </div>

            {/* Seccion Tablas */}
            <section className="intro mt-3 w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 order-2 order-md-1">
                            <article>
                                <TablaPuntuacion />
                            </article>
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2">
                            <TablaEquipos />
                        </div>
                        <section className="UpComingMatches mt-3">
                            <TablaPartidos />
                        </section>
                    </div>
                </div>
            </section>

            {/* Seccion Patrocinadores de Liga */}
            <Patrocinadores />

            {/* Pie de Pagina */}
            <Footer />
        </>
    )
}
