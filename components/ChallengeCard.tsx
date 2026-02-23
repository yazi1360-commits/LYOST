import React from 'react';

interface ChallengeCardProps {
    title: string;
    description: string;
    difficulty: string;
    points: number;
    onAction: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description, difficulty, points, onAction }) => {
    return (
        <div className="challenge-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Points: {points}</p>
            <button onClick={onAction}>Take Challenge</button>
        </div>
    );
};

export default ChallengeCard;