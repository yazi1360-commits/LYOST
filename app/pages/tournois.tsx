import React from 'react';

const Tournaments = () => {
    const activeTournaments = [
        {
            id: 1,
            name: "Tournament 1",
            date: "2026-03-01",
            registrationOpen: true,
        },
        {
            id: 2,
            name: "Tournament 2",
            date: "2026-03-15",
            registrationOpen: false,
        },
    ];

    return (
        <div>
            <h1>Active Tournaments</h1>
            <ul>
                {activeTournaments.map(tournament => (
                    <li key={tournament.id}>
                        <h2>{tournament.name}</h2>
                        <p>Date: {tournament.date}</p>
                        {tournament.registrationOpen ? (
                            <button>Register</button>
                        ) : (
                            <p>Registration Closed</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tournaments;