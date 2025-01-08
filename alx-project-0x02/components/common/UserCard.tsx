import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ address, name, email }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{`${address.street}, ${address.city}`}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
