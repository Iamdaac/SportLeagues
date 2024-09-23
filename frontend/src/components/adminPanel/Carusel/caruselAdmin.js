import React from 'react'

export const caruselAdmin = () => {
    return (
        <>
        <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-inner w-100">
                <div className="carousel-item active">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=1" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=2" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=3" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=4" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=5" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=6" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=7" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-3">
                        <div className="card card-body">
                            <img className="img-fluid" src="https://via.placeholder.com/640x360?text=8" alt="Logo Liga"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}
