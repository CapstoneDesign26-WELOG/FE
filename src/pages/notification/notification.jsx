import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/shared/components/header/header';
import { Reply } from '@/shared/assets/svgs';

const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications') ?? '[]');
    setNotifications(stored);
  }, []);

  return (
    <div className="flex flex-col">
      <Header title="알림" variant="back" onBackClick={() => navigate(-1)} />
      {notifications.length === 0 ? (
        <div className="flex flex-1 items-center justify-center pt-[4rem]">
          <p className="cap_14_m text-gray-500">알림이 없습니다.</p>
        </div>
      ) : (
        <ul>
          {notifications.map((item) => (
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
      )}
    </div>
  );
};

export default Notification;