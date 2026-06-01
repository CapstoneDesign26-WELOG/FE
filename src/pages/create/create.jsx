import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header
        title="글 작성"
        variant="write"
        onBackClick={() => navigate(-1)}
        onRightClick={handleComplete}
      />

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요."
        className="body_16_b px-[2rem] py-[1.6rem] text-gray-black outline-none placeholder:text-gray-500"
      />

      <div className="mx-[2rem] h-[0.1rem] bg-gray-300" />

      <textarea
        className="body_16_m flex-1 resize-none p-[2rem] text-gray-black outline-none placeholder:text-gray-500"
        placeholder="고민을 자유롭게 적어보세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default Create;
