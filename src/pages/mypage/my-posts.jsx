import { Link } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { ROUTES } from '@/shared/routes/routes-config';

const MyPosts = () => (
  <div className="flex flex-1 flex-col bg-white">
    <Header variant="back" title="내가 쓴 글" />

    <main className="flex flex-1 flex-col px-[1.6rem] pt-[0.2rem] pb-[1.6rem]">
      <ul className="flex flex-col">
        <li className="border-b border-[#EFF0F4]">
          <Link to={ROUTES.DETAIL(1)} className="block py-[1.2rem]">
            <p className="body_16_b truncate text-black">
              1교시 드랍할까요? 통학 3시간 너무 힘드네요...
            </p>
            <p className="cap_12_m mt-[0.4rem] text-gray-500">
              댓글 5개 · 3분 전
            </p>
          </Link>
        </li>

        <li className="border-b border-[#EFF0F4] py-[1.2rem]">
          <p className="body_16_b truncate text-black">
            팀플 너무 힘든데 어떡하죠... 팀원 중에 한 명이 연락이 안...
          </p>
          <p className="cap_12_m mt-[0.4rem] text-gray-500">
            댓글 7개 · 11분 전
          </p>
        </li>
      </ul>
    </main>
  </div>
);

export default MyPosts;
