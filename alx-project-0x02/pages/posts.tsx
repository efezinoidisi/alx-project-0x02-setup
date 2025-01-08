import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';

type Props = Omit<PostProps, 'content'> & {
  body: string;
  id: number;
};
const Posts: React.FC<{
  posts: Props[];
}> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className='px-5 md:px-10 lg:px-20'>
        <div className='mb-7'>
          <h1>Posts page</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
