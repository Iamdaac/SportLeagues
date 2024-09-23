import React, { useState } from 'react';

const UploadExcelModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Manejar el cambio del archivo seleccionado
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Manejar la subida del archivo
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Crear un objeto FormData para enviar el archivo
    const formData = new FormData();
    formData.append('archivoExcel', selectedFile);

    // Realizar una solicitud POST con el archivo a la ruta '/upload'
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log('Archivo subido exitosamente', data);
      })
      .catch((error) => {
        console.error('Error al subir el archivo:', error);
      });
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        className="btn btn-primary me-md-2 mt-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modal5"
      >
        Actualizar Estadísticas
      </button>

      {/* Modal para subir archivo Excel */}
      <section>
        <div
          className="modal fade"
          id="modal5"
          tabIndex="-1"
          aria-labelledby="modal5Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="lead">Subir Archivo Excel</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="file"
                    name="archivoExcel"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                  />
                  <button type="submit" className="btn btn-primary mt-3">
                    Subir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadExcelModal;
