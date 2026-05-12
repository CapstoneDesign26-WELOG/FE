import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    type: '새로운 댓글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 3시간 너무 힘드네요...',
    comment: '드랍하자 그냥 어쩌구 저쩌구',
  },
  {
    id: 2,
    type: '내 댓글에 답글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 3시간 너무 힘드네요...',
    comment: '드랍하자 그냥 어쩌구 저쩌구',
  },
  {
    id: 3,
    type: '새로운 댓글이 달렸습니다',
    postTitle: '1교시 드랍할까요? 통학 3시간 너무 힘드네요...',
    comment: '드랍하자 그냥 어쩌구 저쩌구',
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