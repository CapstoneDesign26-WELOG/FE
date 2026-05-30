import { GoogleLogo, Logo } from '@/shared/assets/svgs';
import React from 'react';

const login = () => (
  <div className="flex flex-col flex-1 justify-between px-[1.6rem] pt-[20rem] pb-[4.8rem]">
    <div className="flex justify-center">
      <Logo width={162} />
    </div>
    <button className="flex items-center justify-center gap-[0.8rem] w-full border border-gray-300 rounded-[12px] p-[1.6rem]">
      <GoogleLogo width={19} />
      <p className="body_16_m">Google 계정으로 계속하기</p>
    </button>
  </div>
);

export default login;
