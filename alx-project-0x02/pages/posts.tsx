import React from 'react';
import Header from '../components/layout/Header';

const Posts: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h1>Posts</h1>
                <p>This is the posts page of the application.</p>
            </main>
        </div>
    );
};

export default Posts;
