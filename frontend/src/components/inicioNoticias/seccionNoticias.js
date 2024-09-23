import React from 'react';
import '../../static/css/style.css'

const Modal = ({ id, title, imgSrc, bodyText }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id={`${id}Label`}>{title}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={imgSrc} className="card-img-top" alt="..." />
                        <p className="modal-text lead">{bodyText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = ({ imgSrc, title, text, modalId }) => {
    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text lead">{text}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                        Leer más
                    </button>
                </div>
            </div>
            <Modal id={modalId} title={title} imgSrc={imgSrc} bodyText={text} />
        </div>
    );
};

export const SeccionNoticias = () => {
    return (
        <section id="articles" className="container px-4 py-5">
            <h2 className="fs-10 text-dark text-uppercase text-center mb-3">Noticias</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card 
                    imgSrc="http://placehold.it/500x300" 
                    title="Título del artículo" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    modalId="myModal"
                />
                {/* Puedes añadir más componentes Card aquí con diferentes props */}
            </div>
        </section>
    );
};
