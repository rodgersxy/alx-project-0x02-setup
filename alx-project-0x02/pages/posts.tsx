import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // Map the API response to match the PostProps interface
        const formattedData = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedData);
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Posts;
