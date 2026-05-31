import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/routes/routes-config';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <Link
          to={ROUTES.DETAIL(post.id)}
          className="border-b border-gray-300 px-[1.6rem] py-[1.6rem] flex flex-col gap-[0.4rem]"
        >
          <p className="body_16_m truncate">{post.title}</p>
          <p className="cap_14_m text-gray-600">
            댓글 {post.commentCount}개 · {post.createdAt}
          </p>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
