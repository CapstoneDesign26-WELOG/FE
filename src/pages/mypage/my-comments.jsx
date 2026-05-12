import Header from '@/shared/components/header/header';

const MyComments = () => (
  <div className="flex flex-1 flex-col bg-white">
    <Header variant="back" title="댓글 단 글" />

    <main className="flex flex-1 flex-col px-[1.6rem] pt-[0.2rem] pb-[1.6rem]">
      <ul className="flex flex-col">
        <li className="border-b border-[#EFF0F4] py-[1.2rem]">
          <p className="body_16_b truncate text-black">
            좋아하는 사람이 생겼는데 고백할까 말까
          </p>
          <p className="cap_12_m mt-[0.4rem] text-gray-500">
            댓글 9개 · 3일 전
          </p>
        </li>

        <li className="border-b border-[#EFF0F4] py-[1.2rem]">
          <p className="body_16_b truncate text-black">
            취준생인데 자소서 쓰다가 멘붕 왔어 ㅠㅠ
          </p>
          <p className="cap_12_m mt-[0.4rem] text-gray-500">
            댓글 15개 · 7일 전
          </p>
        </li>
      </ul>
    </main>
  </div>
);

export default MyComments;
