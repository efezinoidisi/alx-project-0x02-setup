import { PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div>
      <h3>
        {title} ({userId})
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
