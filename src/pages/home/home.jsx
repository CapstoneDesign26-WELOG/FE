import Header from '@/shared/components/header/header';
import FloatingButton from './components/floating-button';
import EmptyState from './components/empty-state';
import PostList from './components/post-list';
import { useQuery } from '@tanstack/react-query';
import { userQueries } from '@/shared/apis/user/user-queries';
import { POST_TYPE, postQueries } from '@/shared/apis/post/post-queries';
import { formatTime } from '@/shared/utils/format-time';

const Home = () => {
  const { data: posts = [] } = useQuery(
    postQueries.list({
      type: POST_TYPE.PRIVATE,
    }),
  );

  const mappedPosts = posts.map((post) => ({
    id: post.ID,
    title: post.Title,
    commentCount: post.Count,
    createdAt: formatTime(post.CreatedAt),
  }));

  // 홈 화면 진입시 api 호출
  // TODO: 전체 회의 후 화면에 렌더링
  const { data: userStatus } = useQuery(userQueries.status());
  console.log(userStatus);

  return (
    <div className="relative flex flex-col flex-1">
      <Header variant="logo" />

      {mappedPosts.length === 0 ? (
        <EmptyState />
      ) : (
        <PostList posts={mappedPosts} />
      )}

      <div className="absolute right-[1.6rem] bottom-[3rem]">
        <FloatingButton />
      </div>
    </div>
  );
};

export default Home;
