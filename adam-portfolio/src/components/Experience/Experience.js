import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Head of Software Engineering',
      company: 'TechVision Corp',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: 'Leading a team of 80+ engineers across 5 product lines. Spearheaded digital transformation initiatives resulting in 40% improvement in delivery velocity.',
      achievements: [
        'Architected microservices platform handling 10M+ daily transactions',
        'Reduced infrastructure costs by 35% through cloud optimization',
        'Implemented AI-driven testing reducing bug escape rate by 60%',
      ],
      color: '#00D9FF',
    },
    {
      title: 'Director of Engineering',
      company: 'InnovateTech Solutions',
      location: 'New York, NY',
      period: '2018 - 2021',
      description: 'Managed engineering operations for B2B SaaS products serving Fortune 500 clients. Grew team from 25 to 60 engineers.',
      achievements: [
        'Led successful migration to AWS saving $2M annually',
        'Established DevOps culture reducing deployment time by 80%',
        'Launched 3 new product lines generating $15M ARR',
      ],
      color: '#7C3AED',
    },
    {
      title: 'Senior Software Architect',
      company: 'DataFlow Systems',
      location: 'Austin, TX',
      period: '2015 - 2018',
      description: 'Designed and implemented enterprise-scale data processing systems. Technical lead for real-time analytics platform.',
      achievements: [
        'Built data pipeline processing 5TB daily with 99.99% uptime',
        'Patented novel algorithm for real-time anomaly detection',
        'Mentored team of 12 engineers in distributed systems design',
      ],
      color: '#FF6B35',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Boston, MA',
      period: '2012 - 2015',
      description: 'Core team member at early-stage fintech startup. Full-stack development across web and mobile platforms.',
      achievements: [
        'Developed MVP that secured $5M Series A funding',
        'Scaled platform from 0 to 100K users in 18 months',
        'Implemented PCI-DSS compliant payment infrastructure',
      ],
      color: '#10B981',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                style={{ borderTopColor: exp.color }}
              >
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company" style={{ color: exp.color }}>
                    <FiBriefcase /> {exp.company}
                  </span>
                </div>
                
                <div className="timeline-meta">
                  <span><FiCalendar /> {exp.period}</span>
                  <span><FiMapPin /> {exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <span className="achievement-bullet" style={{ background: exp.color }}></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="timeline-dot"
                style={{ background: exp.color }}
                whileHover={{ scale: 1.5 }}
              />
            </motion.div>
          ))}
          <div className="timeline-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
