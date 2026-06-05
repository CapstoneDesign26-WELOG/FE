import Header from '@/shared/components/header/header';
import FloatingButton from './components/floating-button';
import EmptyState from './components/empty-state';
import PostList from './components/post-list';
import { useQuery } from '@tanstack/react-query';
import { POST_TYPE, postQueries } from '@/shared/apis/post/post-queries';
import { formatTime } from '@/shared/utils/format-time';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const { data: posts = [] } = useQuery(
    postQueries.list({
      type: POST_TYPE.PRIVATE,
    }),
  );

  const mappedPosts = posts.map((post) => ({
    id: post.ID,
    title: post.Title,
    commentCount: post.comment_count,
    createdAt: formatTime(post.CreatedAt),
  }));

  useEffect(() => {
    const shouldShowToast = localStorage.getItem('showAiCommentGuideToast');

    if (!shouldShowToast) return;

    toast('마이페이지에서 선호하는 댓글 유형을 선택해보세요.');

    localStorage.removeItem('showAiCommentGuideToast');
  }, []);

  return (
    <div className=" flex flex-col flex-1">
      <Header variant="logo" />

      {mappedPosts.length === 0 ? (
        <EmptyState />
      ) : (
        <PostList posts={mappedPosts} />
      )}

      {/* <div className="fixed right-[1.6rem] bottom-[8.8rem]"> */}
        <FloatingButton type={POST_TYPE.PRIVATE} />
      {/* </div> */}
    </div>
  );
};

export default Home;
