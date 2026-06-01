import Header from '@/shared/components/header/header';
import FloatingButton from '../home/components/floating-button';
import { POST_TYPE, postQueries } from '@/shared/apis/post/post-queries';
import { useQuery } from '@tanstack/react-query';
import EmptyState from '../home/components/empty-state';
import PostList from '../home/components/post-list';
import { formatTime } from '@/shared/utils/format-time';

const Public = () => {
  const { data: posts = [] } = useQuery(
    postQueries.list({
      type: POST_TYPE.PUBLIC,
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
        <FloatingButton type={POST_TYPE.PUBLIC} />
      </div>
    </div>
  );
};

export default Public;
