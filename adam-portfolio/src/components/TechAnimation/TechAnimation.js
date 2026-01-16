import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMonitor, FiCpu, FiHardDrive, FiServer, 
  FiDatabase, FiCloud, FiCode, FiTerminal,
  FiGitBranch, FiLayers
} from 'react-icons/fi';
import { 
  BsKeyboard, BsMouse, BsGpuCard, BsMemory,
  BsMotherboard, BsUsbDrive
} from 'react-icons/bs';
import './TechAnimation.css';

const TechAnimation = () => {
  const techIcons = [
    { Icon: FiMonitor, delay: 0, x: '10%', y: '15%', size: 45, color: '#00D9FF' },
    { Icon: BsKeyboard, delay: 0.2, x: '85%', y: '20%', size: 40, color: '#7C3AED' },
    { Icon: FiCpu, delay: 0.4, x: '75%', y: '70%', size: 50, color: '#FF6B35' },
    { Icon: BsMouse, delay: 0.6, x: '15%', y: '75%', size: 35, color: '#10B981' },
    { Icon: FiServer, delay: 0.8, x: '90%', y: '45%', size: 42, color: '#00D9FF' },
    { Icon: BsGpuCard, delay: 1, x: '5%', y: '45%', size: 38, color: '#7C3AED' },
    { Icon: FiHardDrive, delay: 1.2, x: '20%', y: '30%', size: 32, color: '#FF6B35' },
    { Icon: FiDatabase, delay: 1.4, x: '80%', y: '85%', size: 36, color: '#10B981' },
    { Icon: BsMemory, delay: 1.6, x: '50%', y: '5%', size: 34, color: '#00D9FF' },
    { Icon: FiCloud, delay: 1.8, x: '60%', y: '90%', size: 40, color: '#7C3AED' },
    { Icon: BsMotherboard, delay: 2, x: '30%', y: '85%', size: 44, color: '#FF6B35' },
    { Icon: FiCode, delay: 2.2, x: '70%', y: '10%', size: 38, color: '#10B981' },
    { Icon: FiTerminal, delay: 2.4, x: '40%', y: '75%', size: 36, color: '#00D9FF' },
    { Icon: FiGitBranch, delay: 2.6, x: '25%', y: '55%', size: 32, color: '#7C3AED' },
    { Icon: FiLayers, delay: 2.8, x: '65%', y: '35%', size: 34, color: '#FF6B35' },
    { Icon: BsUsbDrive, delay: 3, x: '45%', y: '25%', size: 30, color: '#10B981' },
  ];

  return (
    <div className="tech-animation-container">
      {/* Animated Grid Background */}
      <div className="tech-grid">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="grid-line horizontal"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="grid-line vertical"
            style={{ left: `${(i + 1) * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, delay, x, y, size, color }, index) => (
        <motion.div
          key={index}
          className="floating-tech-icon"
          style={{ left: x, top: y, color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            delay,
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Circuit Lines */}
      <svg className="circuit-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="url(#gradient1)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,30 Q40,60 60,30 T100,30"
          stroke="url(#gradient2)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.path
          d="M0,70 Q30,40 70,70 T100,70"
          stroke="url(#gradient3)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data Particles */}
      <div className="data-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="data-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Binary Rain */}
      <div className="binary-rain">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="binary-column"
            style={{ left: `${(i + 1) * 6}%` }}
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {[...Array(20)].map((_, j) => (
              <span key={j} style={{ opacity: Math.random() * 0.5 + 0.1 }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechAnimation;
