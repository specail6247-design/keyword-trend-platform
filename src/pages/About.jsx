import React from 'react';
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)' }}>
      <GlassCard style={{ padding: '48px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', textAlign: 'center' }}>🚀 실시간 키워드 순위 (TrendScope)</h1>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-blue)' }}>우리에 대하여</h2>
          <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
            TrendScope는 전 세계에서 가장 핫한 트렌드를 실시간으로 포착하여 시각화해 주는 지능형 키워드 플랫폼입니다. 
            단순한 리스트 형태의 정보를 넘어, 데이터의 역동성을 느낄 수 있는 인터랙티브 버블 맵을 통해 지금 이 순간 
            세상이 무엇에 주목하고 있는지 한눈에 파악할 수 있도록 돕습니다.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-mint)' }}>주요 특징</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', opacity: 0.9 }}>
            <li><strong>글로벌 플랫폼 지원</strong>: Google, Naver, YouTube 등 주요 플랫폼의 인기 검색어를 분석합니다.</li>
            <li><strong>다국어 지원</strong>: 영어, 일본어, 중국어, 그리고 한국어까지 전 세계 사용자를 배려합니다.</li>
            <li><strong>실시간 시각화</strong>: 50개 이상의 다양한 키워드가 역동적으로 움직이며 트렌드의 흐름을 보여줍니다.</li>
            <li><strong>심층 뉴스 연결</strong>: 각 키워드와 관련된 실시간 뉴스 데이터를 연결하여 정보의 깊이를 더합니다.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-coral)' }}>데이터 제공 및 문의</h2>
          <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
            본 서비스의 데이터는 자체 알고리즘을 통한 시뮬레이션 및 공개 API 데이터를 기반으로 하며, 
            사용자에게 최상의 인사이트를 제공하기 위해 지속적으로 고도화되고 있습니다.
          </p>
          <div style={{ marginTop: '24px', padding: '16px', borderLeft: '4px solid var(--color-blue)', background: 'rgba(255,255,255,0.1)' }}>
            <p style={{ fontWeight: 'bold' }}>📧 문의사항:</p>
            <p>specail6247@gmail.com</p>
          </div>
        </section>

        <p style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.875rem', marginTop: '48px' }}>
          © 2026 TrendScope. Empowering your vision with real-time data.
        </p>
      </GlassCard>
    </div>
  );
};

export default About;
