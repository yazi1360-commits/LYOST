import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <div>
                <a href="https://www.example.com/privacy">Privacy Policy</a> | 
                <a href="https://www.example.com/terms">Terms of Service</a> | 
                <a href="https://www.example.com/contact">Contact Us</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;