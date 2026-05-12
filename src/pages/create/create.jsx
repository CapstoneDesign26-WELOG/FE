import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/Header';

const Create = () => {
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