import React from 'react';
import BuscarNoticia from './buscarNoticia';
import ModalNuevaNoticia from './ModalNuevaNoticia';

const NoticiaPanel = () => {
    return (
        <div>
            <BuscarNoticia />
            <ModalNuevaNoticia />
        </div>
    );
};

export default NoticiaPanel;
