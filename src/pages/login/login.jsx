import { GoogleLogo, Loading, Logo } from '@/shared/assets/svgs';
import { postAuthLogin } from '@/shared/apis/auth/auth-mutations';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ROUTES } from '@/shared/routes/routes-config';

const Login = () => {
  const navigate = useNavigate();
  const googleButtonRef = useRef(null);

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await postAuthLogin(credentialResponse.credential);

      if (response?.access_token) {
        localStorage.setItem('token', response.access_token);
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleButtonClick = () => {
    googleButtonRef.current?.querySelector('div[role="button"]')?.click();
  };

  return (
    <div className="flex flex-1 flex-col justify-between px-[1.6rem] pt-[10rem] pb-[4.8rem]">
      <div className="flex flex-col items-center">
        <Logo width={162} />
      </div>
      <Loading />

      <button
        type="button"
        onClick={handleGoogleButtonClick}
        className="flex h-[5.6rem] w-full cursor-pointer items-center justify-center gap-[0.8rem] rounded-[12px] border border-gray-300 bg-gray-white"
      >
        <GoogleLogo width={19} />
        <p className="body_16_m">Google 계정으로 계속하기</p>
      </button>

      <div ref={googleButtonRef} className="hidden">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log('구글 로그인 실패');
          }}
        />
      </div>
    </div>
  );
};

export default Login;
