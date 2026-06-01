import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';
import { myQueries } from '@/shared/apis/my/my-queries';
import { formatTime } from '@/shared/utils/format-time';

const MyPosts = () => {
  const { data: myInfo } = useQuery(myQueries.info());

  const posts = myInfo?.posts ?? [];

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header variant="back" title="내가 쓴 글" />

      <main className="flex flex-1 flex-col px-[1.6rem] pt-[0.2rem] pb-[1.6rem]">
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li key={post.ID} className="border-b border-[#EFF0F4]">
              <Link to={ROUTES.DETAIL(post.ID)} className="block py-[1.2rem]">
                <p className="body_16_m truncate text-black">{post.Title}</p>
                <p className="cap_12_m mt-[0.4rem] text-gray-500">
                  댓글 {post.Comments?.length ?? 0}개 ·{' '}
                  {formatTime(post.CreatedAt)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MyPosts;