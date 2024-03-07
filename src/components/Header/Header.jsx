import React from 'react';
import './Header.css';

const Header = () => (
    <header className="Header">
        {/* Navigation links here */}
        <nav>
            <a href="/">About</a> | <a href="/blog">Posts</a>
        </nav>
    </header>
);

export default Header;
