import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            LYOST
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/challenges" className="hover:text-blue-200">
              Challenges
            </Link>
            <Link href="/leaderboard" className="hover:text-blue-200">
              Leaderboard
            </Link>
            <Link href="/profile" className="hover:text-blue-200">
              Profile
            </Link>
            <Link href="/login" className="hover:text-blue-200">
              Login
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/challenges" className="block hover:text-blue-200">
              Challenges
            </Link>
            <Link href="/leaderboard" className="block hover:text-blue-200">
              Leaderboard
            </Link>
            <Link href="/profile" className="block hover:text-blue-200">
              Profile
            </Link>
            <Link href="/login" className="block hover:text-blue-200">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
