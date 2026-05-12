import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';

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
            className="flex flex-col gap-[0.8rem] border-b border-gray-300 px-[2rem] py-[2rem]"
          >
            <div className="flex items-center gap-[0.8rem]">
              <span className="text-gray-500">💬</span>
              <span className="body_16_b text-gray-black">{item.type}</span>
            </div>
            <p className="cap_14_m text-gray-600">{item.postTitle}</p>
            <div className="rounded-[0.8rem] bg-gray-200 px-[1.6rem] py-[1.2rem]">
              <p className="cap_14_m text-gray-600">{item.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
