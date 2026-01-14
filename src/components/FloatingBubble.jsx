import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingBubble = ({ text, color, size = 120, xOffset = 0, yOffset = 0 }) => {
  // Use state to initialize random values once on mount for purity
  const [animationParams] = useState(() => ({
    xValues: [xOffset, xOffset + 10, xOffset - 10, xOffset],
    yValues: [yOffset, yOffset - 15, yOffset - 5, yOffset],
    durationX: 4 + Math.random() * 2,
    durationY: 3 + Math.random() * 2,
    initialY: yOffset + 100
  }));

  // Map color names to actual gradient values
  const gradients = {
    mint: 'linear-gradient(135deg, #E0F7FA 0%, #A0E8AF 100%)',
    blue: 'linear-gradient(135deg, #E3F2FD 0%, #A0D2EB 100%)',
    coral: 'linear-gradient(135deg, #FFEBEE 0%, #FFB7B2 100%)',
    yellow: 'linear-gradient(135deg, #FFFDE7 0%, #FFF59D 100%)',
    purple: 'linear-gradient(135deg, #F3E5F5 0%, #CE93D8 100%)',
    pink: 'linear-gradient(135deg, #FCE4EC 0%, #F48FB1 100%)',
    teal: 'linear-gradient(135deg, #E0F2F1 0%, #80CBC4 100%)',
    orange: 'linear-gradient(135deg, #FFF3E0 0%, #FFCC80 100%)',
    indigo: 'linear-gradient(135deg, #E8EAF6 0%, #9FA8DA 100%)',
    lime: 'linear-gradient(135deg, #F9FBE7 0%, #E6EE9C 100%)'
  };

  const shadowColor = {
    mint: 'rgba(160, 232, 175, 0.4)',
    blue: 'rgba(160, 210, 235, 0.4)',
    coral: 'rgba(255, 183, 178, 0.4)',
    yellow: 'rgba(255, 245, 157, 0.4)',
    purple: 'rgba(206, 147, 216, 0.4)',
    pink: 'rgba(244, 143, 177, 0.4)',
    teal: 'rgba(128, 203, 196, 0.4)',
    orange: 'rgba(255, 204, 128, 0.4)',
    indigo: 'rgba(159, 168, 218, 0.4)',
    lime: 'rgba(230, 238, 156, 0.4)'
  };

  return (
    <motion.div
      layout
      initial={{ scale: 0, opacity: 0, x: xOffset, y: animationParams.initialY }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: animationParams.xValues,
        y: animationParams.yValues,
      }}
      exit={{ 
        scale: 1.5, 
        opacity: 0,
        filter: 'blur(10px)',
        transition: { duration: 0.2 } 
      }}
      transition={{
        layout: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5, type: 'spring' },
        x: { duration: animationParams.durationX, repeat: Infinity, ease: "easeInOut" }, 
        y: { duration: animationParams.durationY, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: gradients[color] || gradients.blue,
        boxShadow: `
          inset 10px 10px 20px rgba(255, 255, 255, 0.7),
          inset -10px -10px 20px rgba(0, 0, 0, 0.05),
          0 15px 35px ${shadowColor[color] || 'rgba(0,0,0,0.1)'}
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backdropFilter: 'blur(4px)',
        zIndex: 10,
        top: '50%', 
        left: '50%',
        cursor: 'pointer',
        color: '#2D3436' 
      }}
      whileHover={{ scale: 1.1, zIndex: 20 }}
    >
      <span style={{ 
        fontWeight: '700', 
        fontSize: size * 0.18, 
        color: '#2D3436', // Always dark text inside for contrast
        letterSpacing: '-0.02em',
        pointerEvents: 'none',
        lineHeight: 1.2
      }}>
        {text}
      </span>
      
      {/* Shine effect */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '15%',
        width: '25%',
        height: '15%',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        filter: 'blur(2px)',
        transform: 'rotate(-45deg)'
      }} />

      {/* Balloon String */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: '50%',
        width: '2px',
        height: '40px',
        background: 'rgba(0,0,0,0.1)',
        transform: 'translateX(-50%)',
        zIndex: -1
      }} />
    </motion.div>
  );
};

export default FloatingBubble;
