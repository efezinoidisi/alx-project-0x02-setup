import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { type UserProps } from '@/interfaces';

const Users: React.FC<{
  users: UserProps[];
}> = ({ users }) => {
  return (
    <>
      <Header />
      <main className='px-5 md:px-10 lg:px-20'>
        <div className='mb-7'>
          <h1>Users page</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {users?.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              address={user.address}
              email={user.email}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users, 'users');

  return {
    props: {
      users,
    },
  };
}

export default Users;
