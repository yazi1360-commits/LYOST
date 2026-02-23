import { NextApiRequest, NextApiResponse } from 'next';

// Sample data
let challenges = [
  { id: 1, title: 'Challenge 1', description: 'Description for challenge 1' },
  { id: 2, title: 'Challenge 2', description: 'Description for challenge 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET request
  if (req.method === 'GET') {
    return res.status(200).json(challenges);
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { title, description } = req.body;
    const newChallenge = {
      id: challenges.length + 1,
      title,
      description,
    };
    challenges.push(newChallenge);
    return res.status(201).json(newChallenge);
  }

  // Handle method not allowed
  return res.status(405).json({ message: 'Method not allowed' });
}