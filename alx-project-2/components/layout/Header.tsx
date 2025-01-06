import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between w-full py-5 bg-lime-600 text-white mb-5 px-5 md:px-10 lg:px-20'>
      <Link href={'/'}>Logo</Link>
      <nav className='flex items-center gap-9'>
        <Link href={'/home'}>Home</Link>
        <Link href={'/about'}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
