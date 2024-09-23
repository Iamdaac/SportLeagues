import React from 'react'
import '../../static/css/style.css'


export const navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white shadow-sm">
            <div class="container-fluid justify-content-center">
                <a class="navbar-brand mx-2" href="#inicio">
                    <img src={require('../../static/img/Sport_LeaguesNW.png')} alt='Sport Leagues Logo' draggable="false" height="65" />
                </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.html"><i class="bi bi-house-fill mx-1"></i>Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="estadisticasHome.html"><i class="bi bi-bar-chart-fill mx-1"></i>Estadisticas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contacto.html"><i class="bi bi-telephone-fill mx-1"></i>Contacto</a>
                </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item ms-3 me-lg-0">
                    <a class="nav-link" href="#!">
                    <i class="bi bi-youtube"></i>
                    </a>
                </li>
                <li class="nav-item ms-3 me-lg-0">
                    <a class="nav-link" href="#!">
                    <i class="bi bi-instagram"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
