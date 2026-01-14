import React from 'react';
import GlassCard from './GlassCard';
import { Newspaper, ExternalLink } from 'lucide-react';

const TrendNews = ({ news }) => {
  // Group news by category
  const groupedNews = news.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ marginBottom: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>라이브 트렌드</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>실시간 1~50위 분석</p>
      </div>
      {Object.entries(groupedNews).map(([category, items]) => (
        <GlassCard key={category} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.8)', padding: '8px', borderRadius: '12px' }}>
              <Newspaper size={20} color="var(--color-blue)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{category} 트렌드</h3>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, marginLeft: 'auto' }}>{items.length} Articles</span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '20px',
            paddingRight: '10px'
          }}>
            {items.map((item, i) => (
              <div key={i} style={{ 
                padding: '0', 
                borderRadius: '16px', 
                background: 'rgba(255,255,255,0.2)', 
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-blue)', fontWeight: 'bold' }}>{item.category}</span>
                      <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{item.time}</span>
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.4' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.summary}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px', fontSize: '0.75rem', color: 'var(--color-mint)', fontWeight: 'bold' }}>
                      <span>본문 읽기</span>
                      <ExternalLink size={12} />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

export default TrendNews;
