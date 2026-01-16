import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt,
  FaDatabase, FaCloud
} from 'react-icons/fa';
import { 
  SiTypescript, SiKubernetes, SiMongodb, SiPostgresql, 
  SiRedis, SiGraphql, SiTensorflow, SiJavascript
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'data', name: 'Data & AI' },
  ];

  const skills = [
    { name: 'React', icon: FaReact, level: 95, category: 'frontend', color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, level: 92, category: 'frontend', color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, level: 98, category: 'frontend', color: '#F7DF1E' },
    { name: 'Node.js', icon: FaNodeJs, level: 94, category: 'backend', color: '#339933' },
    { name: 'Python', icon: FaPython, level: 90, category: 'backend', color: '#3776AB' },
    { name: 'GraphQL', icon: SiGraphql, level: 88, category: 'backend', color: '#E10098' },
    { name: 'AWS', icon: FaAws, level: 91, category: 'devops', color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, level: 93, category: 'devops', color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, level: 87, category: 'devops', color: '#326CE5' },
    { name: 'MongoDB', icon: SiMongodb, level: 89, category: 'data', color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 91, category: 'data', color: '#336791' },
    { name: 'Redis', icon: SiRedis, level: 86, category: 'data', color: '#DC382D' },
    { name: 'TensorFlow', icon: SiTensorflow, level: 82, category: 'data', color: '#FF6F00' },
    { name: 'Git', icon: FaGitAlt, level: 96, category: 'devops', color: '#F05032' },
    { name: 'Databases', icon: FaDatabase, level: 94, category: 'data', color: '#00D9FF' },
    { name: 'Cloud', icon: FaCloud, level: 92, category: 'devops', color: '#7C3AED' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: `0 20px 50px ${skill.color}30`
              }}
              layout
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ background: skill.color }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="summary-card">
            <h3>Technical Leadership</h3>
            <p>
              With deep expertise across the full stack, I lead teams in building 
              scalable, maintainable systems that drive business value.
            </p>
          </div>
          <div className="summary-card">
            <h3>Architecture Design</h3>
            <p>
              Experienced in designing microservices, event-driven architectures, 
              and cloud-native solutions for enterprise applications.
            </p>
          </div>
          <div className="summary-card">
            <h3>Innovation Focus</h3>
            <p>
              Constantly exploring emerging technologies like AI/ML, blockchain, 
              and edge computing to create competitive advantages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
