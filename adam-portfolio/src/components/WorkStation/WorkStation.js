import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMonitor, FiCpu, FiHardDrive, FiWifi, 
  FiServer, FiDatabase, FiCloud, FiLock
} from 'react-icons/fi';
import { BsKeyboard, BsMouse, BsGpuCard, BsMemory, BsMotherboard } from 'react-icons/bs';
import './WorkStation.css';

const WorkStation = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const workstationParts = [
    { 
      id: 'monitor', 
      Icon: FiMonitor, 
      label: 'Ultra-Wide Display', 
      specs: '49" 5K Curved',
      position: 'center-top',
      color: '#00D9FF',
      delay: 0
    },
    { 
      id: 'keyboard', 
      Icon: BsKeyboard, 
      label: 'Mechanical Keyboard', 
      specs: 'Custom 75%',
      position: 'center-bottom',
      color: '#7C3AED',
      delay: 0.2
    },
    { 
      id: 'mouse', 
      Icon: BsMouse, 
      label: 'Ergonomic Mouse', 
      specs: 'Wireless 16K DPI',
      position: 'right-bottom',
      color: '#FF6B35',
      delay: 0.4
    },
    { 
      id: 'cpu', 
      Icon: FiCpu, 
      label: 'Processor', 
      specs: 'Intel i9-14900K',
      position: 'left-middle',
      color: '#10B981',
      delay: 0.6
    },
    { 
      id: 'gpu', 
      Icon: BsGpuCard, 
      label: 'Graphics Card', 
      specs: 'RTX 4090 24GB',
      position: 'right-middle',
      color: '#00D9FF',
      delay: 0.8
    },
    { 
      id: 'ram', 
      Icon: BsMemory, 
      label: 'Memory', 
      specs: '128GB DDR5',
      position: 'left-top',
      color: '#7C3AED',
      delay: 1
    },
    { 
      id: 'storage', 
      Icon: FiHardDrive, 
      label: 'Storage', 
      specs: '4TB NVMe SSD',
      position: 'right-top',
      color: '#FF6B35',
      delay: 1.2
    },
    { 
      id: 'motherboard', 
      Icon: BsMotherboard, 
      label: 'Motherboard', 
      specs: 'Z790 Hero',
      position: 'left-bottom',
      color: '#10B981',
      delay: 1.4
    },
  ];

  return (
    <section className="workstation-section" ref={containerRef}>
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Development Workstation
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Powered by cutting-edge hardware for maximum productivity
        </motion.p>

        <div className="workstation-container">
          {/* 3D Computer Illustration */}
          <motion.div 
            className="computer-3d"
            style={{ scale, rotateY: rotate }}
          >
            {/* Monitor */}
            <motion.div 
              className="monitor-wrapper"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="monitor">
                <div className="monitor-screen">
                  <div className="screen-content">
                    <motion.div 
                      className="code-window-mini"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="mini-line"></div>
                      <div className="mini-line short"></div>
                      <div className="mini-line"></div>
                      <div className="mini-line medium"></div>
                      <div className="mini-line short"></div>
                    </motion.div>
                    <motion.div 
                      className="terminal-mini"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="terminal-line-mini"></div>
                      <div className="terminal-line-mini blink"></div>
                    </motion.div>
                  </div>
                  <div className="screen-reflection"></div>
                </div>
                <div className="monitor-stand"></div>
                <div className="monitor-base"></div>
              </div>
            </motion.div>

            {/* Keyboard */}
            <motion.div 
              className="keyboard-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="keyboard">
                <div className="keyboard-keys">
                  {[...Array(36)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="key"
                      animate={{
                        y: Math.random() > 0.95 ? [-2, 0] : 0,
                        boxShadow: Math.random() > 0.95 
                          ? ['0 0 10px var(--primary)', '0 0 0px transparent'] 
                          : 'none'
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
                <div className="keyboard-glow"></div>
              </div>
            </motion.div>

            {/* Mouse */}
            <motion.div 
              className="mouse-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="mouse-device"
                animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mouse-body">
                  <div className="mouse-scroll"></div>
                  <div className="mouse-buttons">
                    <div className="mouse-btn left"></div>
                    <div className="mouse-btn right"></div>
                  </div>
                </div>
                <div className="mouse-glow"></div>
              </motion.div>
            </motion.div>

            {/* CPU Tower */}
            <motion.div 
              className="cpu-tower"
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="tower-body">
                <div className="tower-front">
                  <div className="power-button">
                    <motion.div 
                      className="power-led"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                  <div className="rgb-strip">
                    <motion.div 
                      className="rgb-light"
                      animate={{ 
                        background: [
                          'linear-gradient(180deg, #00D9FF, #7C3AED)',
                          'linear-gradient(180deg, #7C3AED, #FF6B35)',
                          'linear-gradient(180deg, #FF6B35, #00D9FF)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <div className="ventilation">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="vent-line" />
                    ))}
                  </div>
                </div>
                <div className="tower-glass">
                  <motion.div 
                    className="fan"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="fan fan-2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Specs Cards */}
          <div className="specs-grid">
            {workstationParts.map((part, index) => (
              <motion.div
                key={part.id}
                className={`spec-card ${part.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: part.delay }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="spec-icon" style={{ color: part.color }}>
                  <part.Icon />
                </div>
                <div className="spec-info">
                  <h4>{part.label}</h4>
                  <span>{part.specs}</span>
                </div>
                <div 
                  className="spec-glow" 
                  style={{ background: `radial-gradient(circle, ${part.color}30 0%, transparent 70%)` }} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Infrastructure */}
        <motion.div
          className="cloud-infrastructure"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Cloud Development Environment</h3>
          <div className="cloud-nodes">
            {[
              { Icon: FiCloud, label: 'AWS', color: '#FF9900' },
              { Icon: FiServer, label: 'Azure', color: '#0078D4' },
              { Icon: FiDatabase, label: 'GCP', color: '#4285F4' },
              { Icon: FiLock, label: 'Security', color: '#10B981' },
              { Icon: FiWifi, label: 'Network', color: '#7C3AED' },
            ].map((node, i) => (
              <motion.div
                key={node.label}
                className="cloud-node"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="node-icon" style={{ color: node.color }}>
                  <node.Icon />
                </div>
                <span>{node.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkStation;
