import React from 'react'
import '../../static/css/style.css'

const footer = () => {
    return (
    <footer class="p-2 bg-dark">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li class="nav-item">
                <a href="index.html" class="nav-link px-2 text-white">Inicio</a>
            </li>
            <li class="nav-item">
                <a href="estadisticas.html" class="nav-link px-2 text-white">Estadisticas</a>
            </li>
            <li class="nav-item">
                <a href="contacto.html" class="nav-link px-2 text-white">Contacto</a>
            </li>
        </ul>
        <p class="text-center text-white">© 2024 Sports Leagues Panama</p>
    </footer>
    )
}

export default footer