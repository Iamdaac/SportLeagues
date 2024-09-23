import React from 'react';

const FootballLeagues = () => {
    const leagues = [
        { id: 1, src: 'https://placehold.co/400x400', alt: 'Liga 1' },
        { id: 2, src: 'https://placehold.co/400x400', alt: 'Liga 2' },
        { id: 3, src: 'https://placehold.co/400x400', alt: 'Liga 3' },
        { id: 4, src: 'https://placehold.co/400x400', alt: 'Liga 4' },
        { id: 5, src: 'https://placehold.co/400x400', alt: 'Liga 5' },
        { id: 6, src: 'https://placehold.co/400x400', alt: 'Liga 6' },
        { id: 7, src: 'https://placehold.co/400x400', alt: 'Liga 7' },
        { id: 8, src: 'https://placehold.co/400x400', alt: 'Liga 8' },
        { id: 9, src: 'https://placehold.co/400x400', alt: 'Liga 9' },
        { id: 10, src: 'https://placehold.co/400x400', alt: 'Liga 10' },
    ];

    return (
        <div className="container-fluid">
            <div className="container-football container-fluid mb-2">
                <h2 className="pt-5 pb-1 mb-4 text-dark text-uppercase">Football Leagues</h2>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {leagues.map((league) => (
                        <div className="col" key={league.id}>
                            <div className="brand-container bg-white shadow mb-2">
                                <a href="adminEFootballestadisticas.html">
                                    <img className="w-100" src={league.src} alt={league.alt} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FootballLeagues;
