import Header from '@/shared/components/header/header';
import FloatingButton from './components/floating-button';
import EmptyState from './components/empty-state';
import PostList from './components/post-list';
import { useQuery } from '@tanstack/react-query';
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

  return (
    <div className="relative flex flex-col flex-1">
      <Header variant="logo" />

      {mappedPosts.length === 0 ? (
        <EmptyState />
      ) : (
        <PostList posts={mappedPosts} />
      )}

      <div className="absolute right-[1.6rem] bottom-[3rem]">
        <FloatingButton type={POST_TYPE.PRIVATE} />
      </div>
    </div>
  );
};

export default Home;
