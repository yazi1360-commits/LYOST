import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to LYOST!</h1>
        <nav>
          <ul>
            <li><Link href="/challenges">Challenges</Link></li>
            <li><Link href="/leaderboard">Leaderboard</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Featured Challenges</h2>
          <ul>
            <li>Challenge 1: Description</li>
            <li>Challenge 2: Description</li>
            <li>Challenge 3: Description</li>
          </ul>
        </section>
        <section>
          <h2>Leaderboard Preview</h2>
          <ul>
            <li>1. User A</li>
            <li>2. User B</li>
            <li>3. User C</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
