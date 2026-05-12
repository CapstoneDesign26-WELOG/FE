import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header title="마이페이지" />

      <main className="flex flex-1 flex-col px-[1.6rem] pt-[2.6rem] pb-[1.6rem]">
        <section className="rounded-[1.2rem] bg-[#f1f1f3] px-[1.6rem] py-[2rem]">
          <div className="flex flex-col items-center">
            <img src="/svgs/profile.svg" alt="" className="h-[4rem] w-[4rem]" />

            <p className="head_20_sb mt-[0.8rem] text-black">사용자</p>
          </div>

          <div className="mt-[1.6rem] grid grid-cols-3 text-center">
            <div>
              <p className="cap_14_sb text-gray-700">작성한 글</p>
              <p className="head_20_sb mt-[0.4rem] text-[#00B890]">1</p>
            </div>

            <div>
              <p className="cap_14_sb text-gray-700">댓글</p>
              <p className="head_20_sb mt-[0.4rem] text-[#00B890]">3</p>
            </div>

            <div>
              <p className="cap_14_sb text-gray-700">받은 좋아요</p>
              <p className="head_20_sb mt-[0.4rem] text-[#00B890]">3</p>
            </div>
          </div>
        </section>

        <section className="mt-[2.4rem] flex flex-col gap-[1.6rem]">
          <button
            type="button"
            onClick={() => navigate(ROUTES.MY_POSTS)}
            className="flex cursor-pointer items-center gap-[1.2rem] text-left"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D9D9D9]">
              <img
                src="/svgs/book.svg"
                alt=""
                className="h-[2rem] w-[1.6rem]"
              />
            </div>

            <div>
              <p className="body_16_b text-black">내가 쓴 글</p>
              <p className="cap_12_m mt-[0.2rem] text-gray-500">
                내가 작성한 게시글 확인
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate(ROUTES.MY_COMMENTS)}
            className="flex cursor-pointer items-center gap-[1.2rem] text-left"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D9D9D9]">
              <img src="/svgs/reply.svg" alt="" className="h-[2rem] w-[2rem]" />
            </div>

            <div>
              <p className="body_16_b text-black">댓글 단 글</p>
              <p className="cap_12_m mt-[0.2rem] text-gray-500">
                내가 댓글 남긴 게시글 확인
              </p>
            </div>
          </button>
        </section>

        <button
          type="button"
          className="mt-[3.2rem] flex cursor-pointer items-center gap-[1.2rem] border-t border-[#EFF0F4] pt-[2.4rem] text-left"
        >
          <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D9D9D9]">
            <img
              src="/svgs/logout.svg"
              alt=""
              className="h-[1.8rem] w-[1.8rem]"
            />
          </div>

          <p className="body_16_b text-black">로그아웃</p>
        </button>
      </main>
    </div>
  );
};

export default MyPage;
