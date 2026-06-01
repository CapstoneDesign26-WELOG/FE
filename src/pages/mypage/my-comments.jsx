import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';
import { myQueries } from '@/shared/apis/my/my-queries';
import { formatTime } from '@/shared/utils/format-time';

const MyComments = () => {
  const { data: myInfo } = useQuery(myQueries.info());

  const comments = myInfo?.comments ?? [];

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header variant="back" title="댓글 단 글" />

      <main className="flex flex-1 flex-col px-[1.6rem] pt-[0.2rem] pb-[1.6rem]">
        <ul className="flex flex-col">
          {/* TODO: postId 내려주면 라우트 연결  */}
          {comments.map((comment) => (
            <li key={comment.id} className="border-b border-gray-300">
              <Link
                to={ROUTES.DETAIL(comment.post_id)}
                className="block py-[1.2rem]"
              >
                <p className="body_16_m truncate text-gray-black">
                  {comment.post_title}
                </p>
                <p className="cap_12_m mt-[0.4rem] text-gray-500">
                  댓글 {comment.post_comment_count}개 ·{' '}
                  {formatTime(comment.post_created_at)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MyComments;
