import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { Reply } from '@/shared/assets/svgs';

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    type: '새로운 댓글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 40분인데 너무 힘들어요',
    comment: '시간표 재조정 고려해봐. 1교시 대신 다른 시간에 들을 수 있는 ...',
  },
  {
    id: 2,
    type: '내 댓글에 답글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 40분인데 너무 힘들어요',
    comment: '드랍해. 왜 안 해? 1교시 듣는다고 인생이 바뀌는 것도 아니고, ...',
  },
  {
    id: 3,
    type: '새로운 댓글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 40분인데 너무 힘들어요',
    comment: '너무 힘들겠다... 40분이면 정말 먼 거리네. 아침에 일어나는 것...',
  },
];

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Header title="알림" variant="back" onBackClick={() => navigate(-1)} />
      <ul>
        {DUMMY_NOTIFICATIONS.map((item) => (
          <li
            key={item.id}
            className="flex gap-[0.8rem] border-b border-gray-300 p-[1.6rem]"
          >
            <div className="flex justify-center items-center w-[1.6rem] h-[1.6rem] bg-gray-300 rounded-full">
              <Reply width={9.6} />
            </div>

            <section className="flex flex-col w-full gap-[0.4rem]">
              <p className="body_16_b text-gray-black">{item.type}</p>
              <p className="cap_14_m text-gray-600">{item.postTitle}</p>
              <div className="w-full rounded-[8px] bg-gray-200 px-[1.2rem] py-[0.5rem]">
                <p className="cap_12_m text-gray-600">{item.comment}</p>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
