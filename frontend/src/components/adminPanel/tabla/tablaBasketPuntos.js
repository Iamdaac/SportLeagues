import React from 'react';

const TablaPosiciones = () => {
    const equipos = [
        { posicion: 1, nombre: "NOMBRE EQUIPO 1", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
        { posicion: 2, nombre: "NOMBRE EQUIPO 2", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
        { posicion: 3, nombre: "NOMBRE EQUIPO 3", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
        { posicion: 4, nombre: "NOMBRE EQUIPO 4", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
        { posicion: 5, nombre: "NOMBRE EQUIPO 5", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
        { posicion: 6, nombre: "NOMBRE EQUIPO 6", pj: 0, pg: 0, pp: 0, pts: 0, dif: 0 },
    ];

    return (
        <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0 text-center">
                        <thead>
                            <tr>
                                <th scope="col">Posición</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">P.J</th>
                                <th scope="col">P.G</th>
                                <th scope="col">P.P</th>
                                <th scope="col">PTOS.</th>
                                <th scope="col">DIF.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.map((equipo) => (
                                <tr key={equipo.posicion}>
                                    <th scope="row">{equipo.posicion}</th>
                                    <td>{equipo.nombre}</td>
                                    <td>{equipo.pj}</td>
                                    <td>{equipo.pg}</td>
                                    <td>{equipo.pp}</td>
                                    <td>{equipo.pts}</td>
                                    <td>{equipo.dif}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TablaPosiciones;
