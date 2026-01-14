import GlassCard from './GlassCard';
import { TrendingUp, Search, PlayCircle } from 'lucide-react';

const TrendSection = ({ platform, trends, color }) => {
  const getIcon = () => {
    switch (platform) {
      case 'Google': return <Search size={20} color="#4285F4" />;
      case 'Naver': return <span style={{ color: '#03C75A', fontWeight: 900, fontSize: '1.2rem' }}>N</span>;
      case 'YouTube': return <PlayCircle size={20} color="#FF0000" />;
      default: return <TrendingUp />;
    }
  };

  return (
    <GlassCard style={{ padding: '16px', flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.8)', 
          padding: '8px', 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          {getIcon()}
        </div>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{platform}</h3>
      </div>

      <div style={{ flex: 1 }}>
        {trends.map((trend, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '4px 0',
            borderBottom: i !== trends.length - 1 ? '1px solid var(--glass-border)' : 'none'
          }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{i+1}. {trend.keyword}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.8rem', color: color, fontWeight: 700 }}>+{trend.growth}%</span>
              <TrendingUp size={14} color={color} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        height: '24px', 
        marginTop: 'auto', 
        background: `linear-gradient(180deg, ${color}33 0%, rgba(255,255,255,0) 100%)`, 
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}>
          <path 
            d="M0,40 Q20,35 40,20 T100,5 V40 H0 Z" 
            fill={color} 
            fillOpacity="0.2" 
          />
          <path 
            d="M0,40 Q20,35 40,20 T100,5" 
            stroke={color} 
            strokeWidth="2" 
            fill="none" 
          />
        </svg>
      </div>
    </GlassCard>
  );
};

export default TrendSection;
