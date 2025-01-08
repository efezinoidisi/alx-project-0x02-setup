import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { CardProps } from '@/interfaces';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Title 1',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem qui earum eum, voluptates ipsa quidem deleniti porro. Excepturi, sint praesentium.',
    },
    {
      title: 'Title 2',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem qui earum eum, voluptates ipsa quidem deleniti porro. Excepturi, sint praesentium.',
    },
  ]);

  const handleAddPost = (post: CardProps) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <>
      <Header />
      <main className='px-5 md:px-10 lg:px-20'>
        <div className='flex justify-between'>
          <h1 className=' text-2xl font-semibold'>Post Content</h1>
          <button
            className='bg-blue-700 px-4 py-2 rounded-full text-white'
            onClick={() => setIsModalOpen(true)}
          >
            Add Post
          </button>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {posts?.map((post) => (
            <Card title={post.title} content={post.content} key={post.title} />
          ))}
        </div>

        {isModalOpen && (
          <PostModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
