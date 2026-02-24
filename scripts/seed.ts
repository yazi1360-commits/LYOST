import { connectDB } from '@/lib/db';
import Challenge from '@/models/Challenge';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const CHALLENGES = [
  {
    slug: 'two-sum',
    title: 'Two Sum',
    description: 'Trouver deux indices dont la somme égale le target.',
    difficulty: 'Easy',
    points: 50,
    statement: 'Étant donné un tableau nums et un entier target, retourne les indices des deux nombres dont la somme égale target.',
    starter: 'function twoSum(nums, target) {\n  // TODO\n}',
    testCases: [
      { input: '[2,7,11,15], 9', output: '[0,1]' },
      { input: '[3,2,4], 6', output: '[1,2]' },
    ],
  },
  {
    slug: 'palindrome',
    title: 'Palindrome',
    description: 'Vérifier si une chaîne est un palindrome.',
    difficulty: 'Easy',
    points: 30,
    statement: 'Retourne true si la chaîne s est un palindrome, false sinon.',
    starter: 'function isPalindrome(s) {\n  // TODO\n}',
    testCases: [
      { input: 'racecar', output: 'true' },
      { input: 'hello', output: 'false' },
    ],
  },
  {
    slug: 'valid-parentheses',
    title: 'Parenthèses Valides',
    description: 'Vérifier si une expression de parenthèses est valide.',
    difficulty: 'Medium',
    points: 70,
    statement: 'Retourne true si la chaîne contient des parenthèses (), [], {} correctement fermées et imbriquées.',
    starter: 'function isValid(s) {\n  // TODO\n}',
    testCases: [
      { input: '()[]{}', output: 'true' },
      { input: '([{}])', output: 'true' },
      { input: '([)]', output: 'false' },
    ],
  },
];

async function seed() {
  try {
    await connectDB();

    // Clear existing data
    await Challenge.deleteMany({});
    await User.deleteMany({});

    // Seed challenges
    await Challenge.insertMany(CHALLENGES);
    console.log('✅ Challenges seeded');

    // Seed demo user
    const hashedPassword = await bcrypt.hash('password123', 10);
    await User.create({
      username: 'demo',
      email: 'demo@lyost.com',
      password: hashedPassword,
      points: 150,
      badges: ['First Challenge', 'Top Solver'],
    });
    console.log('✅ Demo user created (email: demo@lyost.com, password: password123)');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();