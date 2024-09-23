import React from 'react';

const Noticia = ({ title, content, logo }) => {
    return (
        <div className="container container-noticia my-4 p-2 border" style={{ maxWidth: '95%' }}>
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} alt="Logo Noticia" className="img-fluid" />
                </div>
                <div className="col-md-10">
                    <h1 className="display-6 lead">{title}</h1>
                    <p className="lead">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Noticia;
