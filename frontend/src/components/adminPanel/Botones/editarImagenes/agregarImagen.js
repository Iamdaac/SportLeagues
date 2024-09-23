import React, { useState } from 'react';

const AgregarImagen = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState('https://mdbootstrap.com/img/Photos/Others/placeholder.jpg');

  // Función para mostrar la imagen seleccionada
  const displaySelectedImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // Actualiza la imagen con el resultado del lector de archivos
        onImageSelect(reader.result); // Llama a la función pasada desde el padre
      };
      reader.readAsDataURL(file); // Lee el archivo como URL
    }
  };

  return (
    <div className="modal-body">
      {/* Imagen seleccionada */}
      <div className="mb-4 d-flex justify-content-center">
        <img
          src={selectedImage}
          alt="Imagen seleccionada"
          style={{ width: '300px' }}
        />
      </div>

      {/* Botón para seleccionar archivo */}
      <div className="d-flex justify-content-center">
        <div className="btn btn-primary btn-rounded">
          <label className="form-label text-white m-1" htmlFor="customFile1">
            Elegir archivo
          </label>
          <input
            type="file"
            className="form-control d-none"
            id="customFile1"
            onChange={displaySelectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AgregarImagen;
