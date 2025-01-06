import { CardProps, PostModalProps } from '@/interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [data, setData] = useState<CardProps>({
    title: '',
    content: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(data);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center '>
      <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md text-black'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add New Post</h2>

        <form onSubmit={handleSubmit} className='space-y-7'>
          <label className='flex items-center gap-2'>
            Title:
            <input
              type='text'
              value={data.title}
              id='title'
              name='title'
              onChange={handleChange}
              className='border border-gray-400 rounded-md'
            />
          </label>

          <label className='flex items-center gap-2'>
            Content:
            <textarea
              value={data.content}
              id='content'
              name='content'
              onChange={handleChange}
              className='border border-gray-400 rounded-md resize-none'
              rows={2}
            />
          </label>

          <div className='flex items-center justify-end gap-4'>
            <button type='button' onClick={onClose}>
              {' '}
              Cancel
            </button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
