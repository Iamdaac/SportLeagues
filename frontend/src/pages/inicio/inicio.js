import React from 'react';
import '../../static/css/style.css';
import '../../static/img/Sport_LeaguesNW.png';
import '../../static/img/contactoBGOP1.jpg';
import '../../static/img/iconoWeb.png';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';

const Inicio = () => {
    return (
        <>
            <Navbar />
            {/* Sección Banner */}
            <Banner />

            {/* Sección Video*/}
            <div className="bg-image-container img-fluid">
                <section id="video" loading="lazy" class="pt-5 pb-5">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8 ratio ratio-21x9">
                            <video width="100%" controls>
                            <track label="Español" kind="subtitles" srclang="es" src="captions/vtt/sintel-es.vtt" />
                            <track label="English" kind="subtitles" srclang="en" src="captions/vtt/sintel-en.vtt" default />
                            <source src="https://placehold.co/1920x1080.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
                </div>
                </section>
            </div>

            {/* Sección Carrusel  */}
            <section className="pb-md-2">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="https://placehold.co/1200x200" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="https://placehold.co/1200x200" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placehold.co/1200x200" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </section>

            {/* Sección Noticias */}
            <seccionNoticias />
            <seccionNoticias />
            <seccionNoticias />

            {/* Sección Participantes*/}
            <participantes />

            {/* Sección Patrocinadores*/}
            <patrocinadores />

            {/* Seccion Footer */}
            <Footer />
        </>
    );
}

export default Inicio;
