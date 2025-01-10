import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{content}</p>
      <p className="text-xs text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
