import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';
import { Book, Logout, Profile, Reply } from '@/shared/assets/svgs';
import { useState } from 'react';
import { AI_COMMENT_TYPES, DEFAULT_AI_COMMENT_TYPE } from './constants/my-page';
import { myQueries } from '@/shared/apis/my/my-queries';
import { useQuery } from '@tanstack/react-query';

const MyPage = () => {
  const navigate = useNavigate();

  const { data: myInfo } = useQuery(myQueries.info());

  const user = myInfo?.user;
  const posts = myInfo?.posts ?? [];
  const comments = myInfo?.comments ?? [];

  const postCount = posts.length;

  const receivedLikeCount = comments.reduce(
    (total, comment) => total + comment.like_count,
    0,
  );

  const [selectedAiType, setSelectedAiType] = useState(DEFAULT_AI_COMMENT_TYPE);
  const [savedAiType, setSavedAiType] = useState(DEFAULT_AI_COMMENT_TYPE);

  const isAiTypeChanged = selectedAiType !== savedAiType;

  const handleAiTypeEdit = () => {
    if (!isAiTypeChanged) return;

    // TODO: AI 댓글 선호 유형 수정 API 연결
    setSavedAiType(selectedAiType);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header title="마이페이지" />

      <main className="flex flex-1 flex-col px-[1.6rem] pt-[2.8rem]">
        <section className="flex flex-col items-center gap-[1.2rem] rounded-[12px] bg-gray-100 py-[1.6rem]">
          <Profile width={40} height={40} />

          <p className="subhead_18_sb text-gray-black">
            {user?.Nickname ?? '사용자'}
          </p>

          <div className="w-full grid grid-cols-3 text-center px-[1.2rem] py-[0.8rem]">
            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">작성한 글</p>
              <p className="head_20_sb text-main-900">{postCount}</p>
            </div>

            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">받은 좋아요</p>
              <p className="head_20_sb text-main-900">{receivedLikeCount}</p>
            </div>

            <div className="flex flex-col gap-[0.2rem]">
              <p className="cap_14_sb text-gray-700">남은 토큰</p>
              <p className="head_20_sb text-main-900">
                {user?.TokenCount ?? 0}
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-[2rem]">
          <div className="mb-[1.6rem] flex items-center justify-between">
            <div>
              <p className="body_16_b text-gray-black">AI 댓글 선호 유형</p>
              <p className="cap_12_m pt-[0.4rem] text-gray-600">
                더 선호하는 AI 댓글 스타일을 선택하세요
              </p>
            </div>

            <button
              type="button"
              onClick={handleAiTypeEdit}
              disabled={!isAiTypeChanged}
              className="py-[0.4rem] px-[0.8rem] rounded-[8px] cap_14_m disabled:text-gray-100 disabled:bg-gray-500 disabled:cursor-not-allowed text-gray-white bg-main-1000 cursor-pointer"
            >
              수정
            </button>
          </div>

          <div className="flex flex-col gap-[1.2rem]">
            {AI_COMMENT_TYPES.map((type) => {
              const isSelected = selectedAiType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedAiType(type.id)}
                  className={`flex items-center justify-between rounded-[12px] border px-[1.6rem] py-[1.6rem] text-left cursor-pointer ${
                    isSelected
                      ? 'border-main-1000 bg-main-100'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <div>
                    <p className="body_16_b text-gray-black">{type.title}</p>
                    <p className="cap_14_m pt-[0.8rem] text-gray-600">
                      {type.description}
                    </p>
                  </div>

                  {isSelected && (
                    <span className="flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full bg-main-900">
                      <span className="h-[0.8rem] w-[0.8rem] rounded-full bg-white" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <div className="-mx-[1.6rem] h-[0.1rem] bg-gray-300" />

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
            onClick={handleLogout}
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
