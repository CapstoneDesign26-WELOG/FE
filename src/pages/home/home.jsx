import Header from '@/shared/components/header/header';
import FloatingButton from './components/floating-button';
import { MOCK_POSTS } from './constants/mock-posts';
import EmptyState from './components/empty-state';
import PostList from './components/post-list';

const Home = () => {
  const posts = MOCK_POSTS;

  return (
    <div className="flex flex-col flex-1">
      <Header variant="logo" />

      {posts.length === 0 ? <EmptyState /> : <PostList posts={posts} />}

      <div className="absolute right-[1.6rem] bottom-[3rem]">
        <FloatingButton />
      </div>
    </div>
  );
};

export default Home;
