import { ReactNode } from 'react';

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: ReactNode;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}
