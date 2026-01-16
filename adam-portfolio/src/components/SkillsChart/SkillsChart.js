import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SkillsChart.css';

const SkillsChart = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeChart, setActiveChart] = useState('radar');

  // Radar Chart Data
  const radarSkills = [
    { skill: 'Frontend', level: 95, angle: 0 },
    { skill: 'Backend', level: 90, angle: 60 },
    { skill: 'DevOps', level: 85, angle: 120 },
    { skill: 'Database', level: 88, angle: 180 },
    { skill: 'Cloud', level: 92, angle: 240 },
    { skill: 'AI/ML', level: 78, angle: 300 },
  ];

  // Bar Chart Data
  const barSkills = [
    { name: 'React/Next.js', level: 98, color: '#61DAFB' },
    { name: 'Node.js', level: 94, color: '#339933' },
    { name: 'TypeScript', level: 92, color: '#3178C6' },
    { name: 'Python', level: 88, color: '#3776AB' },
    { name: 'AWS/Cloud', level: 90, color: '#FF9900' },
    { name: 'Docker/K8s', level: 86, color: '#2496ED' },
    { name: 'GraphQL', level: 84, color: '#E10098' },
    { name: 'MongoDB', level: 89, color: '#47A248' },
  ];

  // Donut Chart Data
  const donutData = [
    { label: 'Frontend', value: 35, color: '#00D9FF' },
    { label: 'Backend', value: 30, color: '#7C3AED' },
    { label: 'DevOps', value: 20, color: '#FF6B35' },
    { label: 'Other', value: 15, color: '#10B981' },
  ];

  // Calculate radar points
  const calculateRadarPoints = () => {
    const centerX = 150;
    const centerY = 150;
    const maxRadius = 120;

    return radarSkills.map(({ level, angle }) => {
      const radian = (angle - 90) * (Math.PI / 180);
      const radius = (level / 100) * maxRadius;
      return {
        x: centerX + radius * Math.cos(radian),
        y: centerY + radius * Math.sin(radian),
      };
    });
  };

  const radarPoints = calculateRadarPoints();
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // Calculate donut segments
  let cumulativePercent = 0;
  const donutSegments = donutData.map((item) => {
    const startPercent = cumulativePercent;
    cumulativePercent += item.value;
    return {
      ...item,
      startPercent,
      endPercent: cumulativePercent,
    };
  });

  const getDonutPath = (startPercent, endPercent) => {
    const start = (startPercent / 100) * 2 * Math.PI - Math.PI / 2;
    const end = (endPercent / 100) * 2 * Math.PI - Math.PI / 2;
    const largeArc = endPercent - startPercent > 50 ? 1 : 0;
    const r = 80;
    const cx = 100;
    const cy = 100;

    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);

    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  return (
    <section className="skills-chart-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Proficiency
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Visualizing expertise across different technology domains
        </motion.p>

        {/* Chart Type Selector */}
        <motion.div
          className="chart-selector"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {['radar', 'bar', 'donut'].map((type) => (
            <button
              key={type}
              className={`chart-btn ${activeChart === type ? 'active' : ''}`}
              onClick={() => setActiveChart(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </button>
          ))}
        </motion.div>

        <div className="charts-container">
          {/* Radar Chart */}
          {activeChart === 'radar' && (
            <motion.div
              className="chart-wrapper radar-chart"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 300 300" className="radar-svg">
                {/* Background circles */}
                {[20, 40, 60, 80, 100].map((level) => (
                  <circle
                    key={level}
                    cx="150"
                    cy="150"
                    r={(level / 100) * 120}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Axis lines */}
                {radarSkills.map(({ angle }, i) => {
                  const radian = (angle - 90) * (Math.PI / 180);
                  const x2 = 150 + 120 * Math.cos(radian);
                  const y2 = 150 + 120 * Math.sin(radian);
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1="150"
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Skill area */}
                <motion.path
                  d={radarPath}
                  fill="url(#radarGradient)"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 0.7, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: '150px 150px' }}
                />

                {/* Skill points */}
                {radarPoints.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="var(--primary)"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  />
                ))}

                {/* Labels */}
                {radarSkills.map(({ skill, angle, level }, i) => {
                  const radian = (angle - 90) * (Math.PI / 180);
                  const x = 150 + 145 * Math.cos(radian);
                  const y = 150 + 145 * Math.sin(radian);
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="var(--text)"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {skill} ({level}%)
                    </text>
                  );
                })}

                <defs>
                  <radialGradient id="radarGradient">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          )}

          {/* Bar Chart */}
          {activeChart === 'bar' && (
            <motion.div
              className="chart-wrapper bar-chart"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {barSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bar-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bar-label">
                    <span className="bar-name">{skill.name}</span>
                    <span className="bar-percentage">{skill.level}%</span>
                  </div>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bar-glow" style={{ background: skill.color }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Donut Chart */}
          {activeChart === 'donut' && (
            <motion.div
              className="chart-wrapper donut-chart"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            >
              <svg viewBox="0 0 200 200" className="donut-svg">
                {donutSegments.map((segment, index) => (
                  <motion.path
                    key={segment.label}
                    d={getDonutPath(segment.startPercent, segment.endPercent)}
                    fill={segment.color}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 0.9, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ transformOrigin: '100px 100px' }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                  />
                ))}
                {/* Center circle */}
                <circle cx="100" cy="100" r="50" fill="var(--background)" />
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  fill="var(--text)"
                  fontSize="20"
                  fontWeight="700"
                >
                  10+
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  fill="var(--text-secondary)"
                  fontSize="10"
                >
                  Years Exp
                </text>
              </svg>

              <div className="donut-legend">
                {donutData.map((item) => (
                  <div key={item.label} className="legend-item">
                    <span
                      className="legend-color"
                      style={{ background: item.color }}
                    />
                    <span className="legend-label">{item.label}</span>
                    <span className="legend-value">{item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Performance Metrics */}
        <motion.div
          className="performance-metrics"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: 'Code Quality', value: 98, icon: '⚡' },
            { label: 'Problem Solving', value: 96, icon: '🧩' },
            { label: 'System Design', value: 94, icon: '🏗️' },
            { label: 'Team Leadership', value: 97, icon: '👥' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="metric-card"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <span className="metric-icon">{metric.icon}</span>
              <div className="metric-info">
                <span className="metric-label">{metric.label}</span>
                <div className="metric-bar">
                  <motion.div
                    className="metric-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${metric.value}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                  />
                </div>
                <span className="metric-value">{metric.value}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsChart;
