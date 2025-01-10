import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';


const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<{ title: string; content: string }[]>([
        { title: 'Welcome', content: 'This is the welcome card content.' },
        { title: 'Features', content: 'Learn about the features of this project.' },
    ]);

    const handleAddPost = (title: string, content: string) => {
        setPosts([...posts, { title, content }]);
    };

    return (
        
        
        <div style={{ padding: '16px' }}>

      <Header />
      
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    padding: '10px 20px',
                    marginBottom: '20px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Add Post
            </button>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddPost}
            />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
            }}>
                {posts.map((post, index) => (
                    <Card key={index} title={post.title} content={post.content} />
                ))}
            </div>
            
            
        </div>
        
    );
};

export default Home;