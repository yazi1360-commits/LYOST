import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getUserByEmail } from '../../../lib/db'; // Assume you have a database function to get a user

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Validate request
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Get user from database
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Compare password
        const isValid = await compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Create JWT token
        const token = sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token });
    }

    return res.status(405).json({ message: 'Method not allowed.' });
}