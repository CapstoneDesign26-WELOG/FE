import { LogoGray } from '@/shared/assets/svgs';
import Header from '@/shared/components/header/header';
import FloatingButton from '../home/components/floating-button';

const Public = () => (
  <div className="flex flex-col flex-1">
    <Header variant="logo" />

    <section className="flex flex-1 flex-col items-center justify-center gap-[2.4rem]">
      <LogoGray width={83} />

      <div className="flex flex-col items-center gap-[0.8rem]">
        <p className="head_20_sb text-shadow-gray-black">대화 시작하기</p>
        <p className="cap_14_m text-gray-600">
          고민을 편하게 털어놓고, 익명으로 조언을 들어보세요.
        </p>
      </div>
    </section>

    <div className="absolute right-[1.6rem] bottom-[3rem]">
      <FloatingButton />
    </div>
  </div>
);

export default Public;
