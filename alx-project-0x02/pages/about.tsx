import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className='px-5 md:px-10 lg:px-20'>
        <h1>About page</h1>

        <div className='flex items-center gap-3'>
          <Button shape='rounded-sm' size='small'>
            small
          </Button>
          <Button size='medium' shape='rounded-md'>
            medium
          </Button>
          <Button shape='rounded-full' size='large'>
            large
          </Button>
        </div>
      </main>
    </>
  );
};

export default About;
