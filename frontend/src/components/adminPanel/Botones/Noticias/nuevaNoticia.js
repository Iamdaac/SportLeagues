import React, { useState } from 'react';

const ModalNuevaNoticia = () => {
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
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Noticia</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
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
                            <div className="mb-3">
                                <label htmlFor="noticiaTitulo" className="col-form-label">Título:</label>
                                <input type="text" className="form-control" id="noticiaTitulo" name="noticiaTitulo" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cuerpoNoticia" className="col-form-label">Cuerpo:</label>
                                <textarea className="form-control" id="cuerpoNoticia" name="cuerpoNoticia"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Subir Archivo:</label>
                                <input type="file" className="form-control" id="customFile" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalNuevaNoticia;
