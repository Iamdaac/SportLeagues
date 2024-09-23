import React from 'react';

const EliminarImagen = ({ onImageDelete }) => {
  return (
    <button className="btn btn-primary" type="button" onClick={onImageDelete}>
      Eliminar
    </button>
  );
};

export default EliminarImagen;
