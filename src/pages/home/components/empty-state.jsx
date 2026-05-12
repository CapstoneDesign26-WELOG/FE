import { LogoGray } from '@/shared/assets/svgs';

const EmptyState = () => (
  <section className="flex flex-1 flex-col items-center justify-center gap-[2.4rem]">
    <LogoGray width={83} />

    <div className="flex flex-col items-center gap-[0.8rem]">
      <p className="head_20_sb text-shadow-gray-black">대화 시작하기</p>
      <p className="cap_14_m text-gray-600">
        고민을 편하게 털어놓고, 다양한 조언을 들어보세요.
      </p>
    </div>
  </section>
);

export default EmptyState;
