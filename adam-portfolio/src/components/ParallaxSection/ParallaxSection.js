import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ParallaxSection.css';

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 30 });

  const achievements = [
    { number: '50M+', label: 'Users Impacted', icon: '👥' },
    { number: '$100M+', label: 'Revenue Generated', icon: '💰' },
    { number: '99.99%', label: 'System Uptime', icon: '⚡' },
    { number: '200+', label: 'Engineers Mentored', icon: '🎓' },
  ];

  return (
    <section className="parallax-section" ref={containerRef}>
      <motion.div className="parallax-bg" style={{ opacity }}>
        {/* Floating Geometric Shapes */}
        <motion.div 
          className="parallax-shape shape-1"
          style={{ y: smoothY1, rotate: rotate1 }}
        >
          <div className="shape-inner gradient-1" />
        </motion.div>

        <motion.div 
          className="parallax-shape shape-2"
          style={{ y: smoothY2, rotate: rotate2 }}
        >
          <div className="shape-inner gradient-2" />
        </motion.div>

        <motion.div 
          className="parallax-shape shape-3"
          style={{ y: smoothY3 }}
        >
          <div className="shape-inner gradient-3" />
        </motion.div>

        <motion.div 
          className="parallax-shape shape-4"
          style={{ y: y4, scale: scale1 }}
        >
          <div className="shape-inner gradient-4" />
        </motion.div>

        {/* Grid Lines */}
        <div className="parallax-grid">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="grid-line-h"
              style={{ top: `${i * 10}%` }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 1 }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="grid-line-v"
              style={{ left: `${i * 10}%` }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 1 }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="parallax-particles">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="p-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container" ref={ref}>
        <motion.div
          className="parallax-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="parallax-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Transforming Ideas into
            <span className="highlight-text"> Digital Reality</span>
          </motion.h2>

          <motion.p
            className="parallax-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the future of technology, one line of code at a time
          </motion.p>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="achievement-card"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 30px 60px rgba(0, 217, 255, 0.2)'
                }}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <motion.span 
                  className="achievement-number"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {achievement.number}
                </motion.span>
                <span className="achievement-label">{achievement.label}</span>
                <div className="achievement-glow" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
