import React from 'react';

const Imagenes = () => {
    const imagenes = [
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300"
    ];

    return (
        <div className="container">
            <h1 className="fw-light text-center text-lg-start mt-4 mb-0 fs-4">Imágenes página principal</h1>
            <hr className="mt-2 mb-5" />
            <div className="row text-center text-lg-start">
                {imagenes.map((src, index) => (
                    <div className="col-lg-3 col-md-4 col-6" key={index}>
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src={src} alt={`Imagen ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Imagenes;
