import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, var(--color-mint) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--color-blue) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, var(--color-coral) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          width: '20vw',
          height: '20vw',
          background: 'radial-gradient(circle, var(--color-yellow) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          opacity: 0.3
        }}
      />
    </div>
  );
};

export default Background;
