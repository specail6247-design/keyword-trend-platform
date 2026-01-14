import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import GlassCard from '../components/GlassCard';

export default function Login() {
  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    alert('로그인 성공! (실모드에서는 서버에 토큰을 검증합니다)');
  };

  const handleError = () => {
    console.log('Login Failed');
    alert('로그인 실패');
  };

  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <GlassCard style={{ padding: '48px', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ marginBottom: '16px' }}>로그인</h1>
        <p style={{ marginBottom: '32px', opacity: 0.7 }}>TrendScope의 더 많은 기능을 이용하세요.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            shadow="hover"
            width="250"
          />
        </div>

        <p style={{ marginTop: '24px', fontSize: '12px', opacity: 0.5 }}>
          로그인 시 개인정보처리방침 및 이용약관에 동의하는 것으로 간주합니다.
        </p>
      </GlassCard>
    </div>
  );
}
