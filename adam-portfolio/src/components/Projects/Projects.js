import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filters = ['all', 'web', 'mobile', 'ai', 'enterprise'];

  const projects = [
    {
      title: 'Enterprise Cloud Platform',
      description: 'Scalable multi-tenant SaaS platform serving 500+ enterprise clients with real-time analytics and AI-powered insights.',
      image: '/project1.jpg',
      tags: ['React', 'Node.js', 'AWS', 'Kubernetes'],
      category: 'enterprise',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'AI Trading System',
      description: 'Machine learning-powered algorithmic trading platform processing 1M+ transactions daily with predictive analytics.',
      image: '/project2.jpg',
      tags: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'HealthTech Mobile App',
      description: 'HIPAA-compliant telehealth platform with video consultations, prescription management, and health tracking.',
      image: '/project3.jpg',
      tags: ['React Native', 'Firebase', 'WebRTC'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Real-Time Collaboration Suite',
      description: 'Enterprise collaboration platform with real-time document editing, video conferencing, and project management.',
      image: '/project4.jpg',
      tags: ['Next.js', 'Socket.io', 'MongoDB'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Supply Chain Optimizer',
      description: 'AI-driven supply chain management system reducing logistics costs by 30% through intelligent route optimization.',
      image: '/project5.jpg',
      tags: ['Python', 'ML', 'GraphQL', 'Docker'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'High-performance e-commerce solution handling 100K+ concurrent users with personalized recommendations.',
      image: '/project6.jpg',
      tags: ['React', 'Node.js', 'Elasticsearch'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -15 }}
              >
                <div className="project-image">
                  <div className="image-overlay">
                    <FiFolder className="folder-icon" />
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="view-more"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View All Projects <FiGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
