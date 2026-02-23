// pages/api/leaderboard.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Sample leaderboard data
const leaderboardData = [
  { name: 'Player 1', score: 1500 },
  { name: 'Player 2', score: 1200 },
  { name: 'Player 3', score: 900 },
  { name: 'Player 4', score: 600 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(leaderboardData);
}