import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';
import { Book, Logout, Profile, Reply } from '@/shared/assets/svgs';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header title="마이페이지" />

      <main className="flex flex-1 flex-col px-[1.6rem] pt-[2.8rem]">
        <section className="flex flex-col items-center gap-[1.2rem] rounded-[12px] bg-gray-100 p-[2rem]">
          <Profile width={40} height={40} />

          <p className="subhead_18_sb text-gray-black">사용자</p>

          <div className="w-full grid grid-cols-3 text-center px-[1.2rem] py-[0.8rem]">
            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">작성한 글</p>
              <p className="head_20_sb text-main-900">1</p>
            </div>

            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">댓글</p>
              <p className="head_20_sb text-main-900">3</p>
            </div>

            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">받은 좋아요</p>
              <p className="head_20_sb text-main-900">3</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-[1.6rem]">
          <button
            type="button"
            onClick={() => navigate(ROUTES.MY_POSTS)}
            className="flex cursor-pointer items-center py-[1.2rem] gap-[0.8rem] text-left"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-gray-300">
              <Book width={20} height={20} />
            </div>

            <div>
              <p className="body_16_b text-gray-black">내가 쓴 글</p>
              <p className="cap_12_m py-[0.4rem] text-gray-600">
                내가 작성한 게시글 확인
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate(ROUTES.MY_COMMENTS)}
            className="flex cursor-pointer items-center py-[1.2rem] gap-[0.8rem] text-left"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-gray-300">
              <Reply width={20} height={20} />
            </div>

            <div>
              <p className="body_16_b text-gray-black">댓글 단 글</p>
              <p className="cap_12_m py-[0.4rem] text-gray-600">
                내가 댓글 남긴 게시글 확인
              </p>
            </div>
          </button>
        </section>

        <div className="-mx-[1.6rem] h-[0.1rem] bg-gray-300" />

        <section className="flex flex-col py-[1.6rem]">
          <button
            type="button"
            className="flex cursor-pointer items-center py-[1.2rem] gap-[0.8rem] text-left"
          >
            <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-gray-300">
              <Logout width={20} height={20} />
            </div>

            <p className="body_16_b text-gray-black">로그아웃</p>
          </button>
        </section>
      </main>
    </div>
  );
};

export default MyPage;
