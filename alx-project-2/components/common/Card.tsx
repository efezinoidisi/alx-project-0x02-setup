import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className=''>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};

export default Card;
