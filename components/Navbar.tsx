import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = true; // Replace with actual auth logic
    const username = 'yazi1360-commits'; // Fetch the real username from your auth state

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div>
                {isAuthenticated ? <span>Logged in as {username}</span> : <Link to='/login'>Login</Link>}
            </div>
        </nav>
    );
};

export default Navbar;