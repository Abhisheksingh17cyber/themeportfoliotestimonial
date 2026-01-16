import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiUsers, FiCode, FiGlobe, FiCoffee } from 'react-icons/fi';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stats = [
    { icon: FiCode, number: 500, suffix: 'K+', label: 'Lines of Code', color: '#00D9FF' },
    { icon: FiUsers, number: 100, suffix: '+', label: 'Team Members Led', color: '#7C3AED' },
    { icon: FiGlobe, number: 50, suffix: '+', label: 'Projects Delivered', color: '#FF6B35' },
    { icon: FiCoffee, number: 10000, suffix: '+', label: 'Coffee Cups', color: '#10B981' },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-bg">
        <div className="stats-gradient"></div>
      </div>
      <div className="container">
        <div className="stats-wrapper">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="stat-icon-wrapper"
                style={{ background: `${stat.color}20`, color: stat.color }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <stat.icon />
              </motion.div>
              <div className="stat-content">
                <span className="stat-number" style={{ color: stat.color }}>
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                    />
                  )}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
