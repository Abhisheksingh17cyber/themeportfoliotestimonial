import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: FiCode, number: '500K+', label: 'Lines of Code' },
    { icon: FiUsers, number: '100+', label: 'Team Members Led' },
    { icon: FiAward, number: '25+', label: 'Awards Won' },
    { icon: FiCoffee, number: '∞', label: 'Coffee Consumed' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-frame">
              <div className="frame-border"></div>
              <div className="about-img-placeholder">
                <span>A</span>
              </div>
              <motion.div
                className="experience-badge"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span>10+</span>
                <p>Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <h3>Driving Innovation Through Technology Leadership</h3>
            <p>
              As a seasoned Software Head with over a decade of experience, I've had the 
              privilege of leading transformative projects across fintech, healthcare, 
              and enterprise software domains. My journey began as a passionate developer, 
              and today I architect solutions that scale to millions of users.
            </p>
            <p>
              I believe in the power of combining technical excellence with strategic 
              thinking. My leadership philosophy centers on empowering teams, fostering 
              innovation, and delivering exceptional value to stakeholders.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Strategic Vision</h4>
                  <p>Translating business goals into technical roadmaps</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Scaling Excellence</h4>
                  <p>Built systems handling 10M+ daily transactions</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <div>
                  <h4>Innovation Driver</h4>
                  <p>15+ patents in AI and distributed systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <stat.icon className="stat-icon" />
              <span className="stat-number">{stat.number}</span>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
