import { connectDB } from '@/lib/db';
import User from '@/models/User';
import Challenge from '@/models/Challenge';
import bcrypt from 'bcryptjs';

async function seed() {
  try {
    await connectDB();
    console.log('Connected to database');

    // Clear existing data
    await User.deleteMany({});
    await Challenge.deleteMany({});
    console.log('Cleared existing data');

    // Create demo user
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await User.create({
      username: 'demo',
      email: 'demo@lyost.com',
      password: hashedPassword,
      points: 150,
      badges: ['First Challenge', 'Week Streak'],
    });
    console.log('Created demo user:', user.email);

    // Create challenges
    const challenges = [
      {
        slug: 'hello-world',
        title: 'Hello World',
        description: 'Ton premier programme!',
        difficulty: 'Easy',
        points: 10,
        statement: `Écris un programme qui affiche "Hello World".

Exemples:
- Console: "Hello World"`,
        starter: `console.log("Hello World");`,
        testCases: [
          { input: '', output: 'Hello World' },
        ],
      },
      {
        slug: 'sum-two-numbers',
        title: 'Additionner deux nombres',
        description: 'Additione deux nombres et retourne le résultat',
        difficulty: 'Easy',
        points: 20,
        statement: `Crée une fonction qui additionne deux nombres.

Exemples:
- add(2, 3) = 5
- add(10, 20) = 30`,
        starter: `function add(a, b) {
  return a + b;
}`,
        testCases: [
          { input: 'add(2, 3)', output: '5' },
          { input: 'add(10, 20)', output: '30' },
        ],
      },
      {
        slug: 'fibonacci-sequence',
        title: 'Suite de Fibonacci',
        description: 'Générer la suite de Fibonacci jusqu\'à n',
        difficulty: 'Medium',
        points: 50,
        statement: `Crée une fonction qui retourne la suite de Fibonacci jusqu'à n.

Exemples:
- fibonacci(5) = [0, 1, 1, 2, 3]
- fibonacci(8) = [0, 1, 1, 2, 3, 5, 8]`,
        starter: `function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}`,
        testCases: [
          { input: 'fibonacci(5)', output: '[0, 1, 1, 2, 3]' },
          { input: 'fibonacci(8)', output: '[0, 1, 1, 2, 3, 5, 8]' },
        ],
      },
      {
        slug: 'palindrome-checker',
        title: 'Vérificateur de palindrome',
        description: 'Vérifier si une chaîne est un palindrome',
        difficulty: 'Medium',
        points: 40,
        statement: `Crée une fonction qui vérifie si une chaîne est un palindrome.

Exemples:
- isPalindrome("racecar") = true
- isPalindrome("hello") = false
- isPalindrome("A man a plan a canal Panama") = true (ignorer espaces et casse)`,
        starter: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
        testCases: [
          { input: 'isPalindrome("racecar")', output: 'true' },
          { input: 'isPalindrome("hello")', output: 'false' },
        ],
      },
      {
        slug: 'merge-sorted-arrays',
        title: 'Fusionner deux arrays triés',
        description: 'Fusionner deux arrays triés en un seul array trié',
        difficulty: 'Hard',
        points: 75,
        statement: `Crée une fonction qui fusionne deux arrays triés.

Exemples:
- mergeSorted([1, 3, 5], [2, 4, 6]) = [1, 2, 3, 4, 5, 6]
- mergeSorted([1], [2]) = [1, 2]`,
        starter: `function mergeSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}`,
        testCases: [
          { input: 'mergeSorted([1, 3], [2, 4])', output: '[1, 2, 3, 4]' },
          { input: 'mergeSorted([1, 5], [2, 3])', output: '[1, 2, 3, 5]' },
        ],
      },
    ];

    await Challenge.insertMany(challenges);
    console.log('Created 5 challenges');

    // Create additional demo users
    const users = [
      {
        username: 'alice',
        email: 'alice@lyost.com',
        password: await bcrypt.hash('password123', 10),
        points: 320,
        badges: ['Problem Solver', 'Week Streak', 'Month Streak'],
      },
      {
        username: 'bob',
        email: 'bob@lyost.com',
        password: await bcrypt.hash('password123', 10),
        points: 210,
        badges: ['First Challenge'],
      },
      {
        username: 'charlie',
        email: 'charlie@lyost.com',
        password: await bcrypt.hash('password123', 10),
        points: 450,
        badges: ['Expert', 'Week Streak', 'Month Streak', 'Year Streak'],
      },
    ];

    await User.insertMany(users);
    console.log('Created 3 additional demo users');

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();