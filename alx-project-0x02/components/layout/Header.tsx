import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header style={{ display: 'flex', gap: '10px', padding: '10px' }}>
            <h1>ALX Project</h1>
            <nav>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;
