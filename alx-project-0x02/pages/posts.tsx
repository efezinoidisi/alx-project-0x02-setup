import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';

const Posts: React.FC<{
  posts: PostProps[];
}> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Header />
      <main className='px-5 md:px-10 lg:px-20'>
        <div>
          <h1>Posts page</h1>
        </div>
        <div>
          {posts?.map((post) => (
            <PostCard
              key={post.title}
              title={post.title}
              content={post.content}
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
