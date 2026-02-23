import React from 'react';

const Profile = () => {
    const user = {
        username: 'yazi1360-commits',
        email: 'user@example.com', // Replace with actual user email
        totalSolves: 42, // Replace with actual data
        points: 200, // Replace with actual data
        joinDate: '2026-02-23',
        badges: ['Beginner', 'Intermediate'], // Replace with actual badges
    };

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Total Solves:</strong> {user.totalSolves}</p>
            <p><strong>Points:</strong> {user.points}</p>
            <p><strong>Join Date:</strong> {user.joinDate}</p>
            <p><strong>Badges:</strong> {user.badges.join(', ')}</p>
        </div>
    );
};

export default Profile;