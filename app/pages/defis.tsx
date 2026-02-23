import React from 'react';

const codingChallenges = [
  { id: 1, title: 'Challenge 1', difficulty: 'Easy', language: 'JavaScript', submissionCount: 5 },
  { id: 2, title: 'Challenge 2', difficulty: 'Medium', language: 'Python', submissionCount: 10 },
  { id: 3, title: 'Challenge 3', difficulty: 'Hard', language: 'Java', submissionCount: 12 }
];

const Defis = () => {
  return (
    <div>
      <h1>Coding Challenges</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {codingChallenges.map((challenge) => (
          <div key={challenge.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
            <h2>{challenge.title}</h2>
            <p>Difficulty: {challenge.difficulty}</p>
            <p>Language: {challenge.language}</p>
            <p>Submissions: {challenge.submissionCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Defis;
