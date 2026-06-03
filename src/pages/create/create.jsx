import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { postMutations } from '@/shared/apis/post/post-mutations';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTES } from '@/shared/routes/routes-config';
import { POST_TYPE } from '@/shared/apis/post/post-queries';
import { QUERY_KEY } from '@/shared/constants/query-key';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const postType = location.state?.type ?? POST_TYPE.PUBLIC;

  const isCompleteDisabled =
    title.trim().length === 0 || content.trim().length === 0;

  const { mutate: createPost, isPending } = useMutation({
    ...postMutations.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST, postType],
      });

      navigate(postType === POST_TYPE.PRIVATE ? ROUTES.HOME : ROUTES.PUBLIC);
    },
  });

  const handleComplete = () => {
    if (isCompleteDisabled || isPending) return;

    createPost({
      title: title.trim(),
      description: content.trim(),
      type: postType,
    });
  };

  return (
    <div className="flex h-screen flex-col">
      <Header
        title="글 작성"
        variant="write"
        onBackClick={() => navigate(-1)}
        onRightClick={handleComplete}
        disabled={isCompleteDisabled || isPending}
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
