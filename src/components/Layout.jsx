import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search, Bell, User, Moon, Sun } from 'lucide-react';
import Background from './Background';
import GlassCard from './GlassCard';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '简体中文' },
    { code: 'ko', label: '한국어' }
  ];

  return (
    <>
      <Background />
      
      <div style={{ 
        maxWidth: '1440px', 
        margin: '0 auto', 
        padding: '16px', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        boxSizing: 'border-box',
        gap: '16px'
      }}>
        {/* Header */}
        <GlassCard style={{ 
          padding: '16px 32px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexShrink: 0
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '12px', 
                background: 'linear-gradient(135deg, var(--color-mint), var(--color-blue))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: 900,
                fontSize: '1.2rem'
              }}>실</div>
              <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(90deg, #2D3436, #636E72)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>실시간 키워드 순위</h1>
            </div>
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search trends..." 
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '10px 16px 10px 40px',
                  width: '200px',
                  outline: 'none',
                  color: '#2D3436'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: '#2D3436' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.3)', padding: '4px 12px', borderRadius: '15px' }}>
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ background: 'none', border: 'none', fontSize: '0.8rem', cursor: 'pointer', outline: 'none', color: 'var(--text-primary)' }}
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>{lang.label}</option>
                    ))}
                  </select>
                </div>
                 <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    color: 'var(--text-primary)'
                  }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              <div style={{ opacity: 0.6, display: 'flex', gap: '16px' }}>
                  <Bell size={20} cursor="pointer" />
                  <Link to="/login" style={{ color: 'inherit' }}>
                    <User size={20} cursor="pointer" />
                  </Link>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Top Info Bar */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          overflowX: 'auto', 
          padding: '4px 0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {[
            { label: '🔥 실시간 인기', path: '/' },
            { label: '🌍 글로벌 트렌드', path: '/' },
            { label: '🤖 AI/테크 뉴스', path: '/' },
            { label: '📈 경제 동향', path: '/' },
            { label: '🍎 비즈니스', path: '/' },
            { label: '🎨 라이프스타일', path: '/' },
            { label: '📢 서비스 안내', path: '/about' }
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{ textDecoration: 'none' }}>
              <GlassCard style={{ 
                padding: '8px 16px', 
                whiteSpace: 'nowrap', 
                fontSize: '0.85rem', 
                fontWeight: 600,
                color: 'var(--text-primary)',
                background: 'rgba(255,255,255,0.4)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                {item.label}
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Page Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <Outlet />
        </div>

         {/* Footer */}
         <footer style={{ 
           marginTop: 'auto', 
           padding: '40px 0 20px', 
           borderTop: '1px solid var(--glass-border)',
           display: 'flex',
           flexDirection: 'column',
           gap: '20px',
           color: 'var(--text-secondary)',
           fontSize: '0.875rem'
         }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>서비스 소개</Link>
                <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>개인정보처리방침</Link>
                <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>이용약관</Link>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ marginBottom: '4px' }}>문의: <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>specail6247@gmail.com</span></p>
                <p style={{ opacity: 0.7 }}>실시간 트렌드 분석 플랫폼 | © 2026 TrendScope</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '16px', opacity: 0.6, fontSize: '0.75rem', lineHeight: '1.5' }}>
              본 서비스는 전 세계 실시간 트렌드 데이터를 시각화하여 제공합니다. 
              검색 엔진 및 플랫폼의 데이터를 기반으로 하며, 기술적 오류나 환경에 따라 실시간 순위와 다소 차이가 있을 수 있습니다. 
              모든 트렌드 정보는 정보 제공의 목적으로만 사용됩니다.
            </div>
         </footer>
      </div>
    </>
  );
}
