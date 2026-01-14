import React from 'react';

const GlassCard = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={className}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '24px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        color: 'var(--text-primary)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
