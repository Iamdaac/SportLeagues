import React from 'react'

export const tablaPartidos = () => {
    return (
        <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive">
                <table className="table table-hover table-borderless text-center">
                    <thead>
                    <tr>
                        <th scope="col" colspan="3" className="text-uppercase">Partidos</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>EQUIPO 1</td>
                        <td>VS</td>
                        <td>EQUIPO 2</td>
                    </tr>
                    <tr>
                        <td>EQUIPO 3</td>
                        <td>VS</td>
                        <td>EQUIPO 4</td>
                    </tr>
                    <tr>
                        <td>EQUIPO 5</td>
                        <td>VS</td>
                        <td>EQUIPO 6</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
