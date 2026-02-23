import React from 'react';

// Sample data for demonstration purposes
const sampleData = [
  { user: 'Alice', solves: 10, points: 100 },
  { user: 'Bob', solves: 8, points: 80 },
  { user: 'Charlie', solves: 5, points: 50 },
];

const Leaderboard = () => {
  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Solves</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{entry.solves}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
