import React from 'react'

export const barraLateral = () => {
    return (
        <>
        <aside id="sidebar">
            <div className="d-flex">
                <button className="toggle-btn" type="button">
                    <i className="lni lni-grid-alt"></i>
                </button>
                <div className="sidebar-logo">
                    <a href="/">Sport Leagues Report</a>
                </div>
            </div>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="index.html" className="sidebar-link">
                        <i className="lni lni-user"></i>
                        <span>Web</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="adminPanel.html" className="sidebar-link">
                        <i className="lni lni-protection"></i>
                        <span>Principal</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="lni lni-agenda"></i>
                        <span>Estadisticas de Ligas</span>
                    </a>
                    <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <a href="adminEBasket.html" className="sidebar-link">Basketball</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="adminEFootball.html" className="sidebar-link">Football</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="adminNoticias.html" className="sidebar-link">
                        <i className="lni lni-layout"></i>
                        <span>Noticias</span>
                    </a>
                </li>
            </ul>
            <div className="sidebar-footer">
                <a href="loginAdmin.html" className="sidebar-link">
                    <i className="lni lni-exit"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
        </>
    )
}
