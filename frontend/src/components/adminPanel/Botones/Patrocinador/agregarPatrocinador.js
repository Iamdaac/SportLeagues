import React, { useState } from 'react';

const AgregarPatrocinador = () => {
    const [selectedImage, setSelectedImage] = useState('https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');

    const displaySelectedImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="d-grid gap-1 d-md-flex">
            <button className="btn btn-primary me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#modalAgregar">
                Añadir
            </button>

            <section>
                <div className="modal fade" id="modalAgregar" tabIndex="-1" aria-labelledby="modalAgregarLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="mb-4 d-flex justify-content-center">
                                    <img id="selectedImage" src={selectedImage} alt="Imagen seleccionada" style={{ width: '300px' }} />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="btn btn-primary btn-rounded">
                                        <label className="form-label text-white m-1" htmlFor="customFile1">Elegir archivo</label>
                                        <input
                                            type="file"
                                            className="form-control d-none"
                                            id="customFile1"
                                            onChange={displaySelectedImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgregarPatrocinador;
