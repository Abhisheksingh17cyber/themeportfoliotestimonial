import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiUsers, FiTrendingUp, FiAward, FiTarget, FiZap } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: FiUsers,
      title: 'Team Leadership',
      description: 'Building and scaling high-performing engineering teams with a focus on culture, growth, and delivery excellence.',
      features: ['Hiring & Onboarding', 'Performance Management', 'Mentorship Programs'],
    },
    {
      icon: FiTarget,
      title: 'Technical Strategy',
      description: 'Developing technology roadmaps aligned with business objectives and market opportunities.',
      features: ['Technology Assessment', 'Roadmap Planning', 'Risk Mitigation'],
    },
    {
      icon: FiZap,
      title: 'Architecture Design',
      description: 'Designing scalable, resilient systems that support business growth and operational efficiency.',
      features: ['Microservices', 'Cloud Native', 'Event-Driven'],
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Transformation',
      description: 'Leading digital initiatives that modernize legacy systems and enable innovation.',
      features: ['Cloud Migration', 'Process Automation', 'Data Strategy'],
    },
    {
      icon: FiAward,
      title: 'Quality Engineering',
      description: 'Establishing engineering excellence through best practices, automation, and continuous improvement.',
      features: ['CI/CD Pipelines', 'Test Automation', 'Code Reviews'],
    },
    {
      icon: FiDownload,
      title: 'Innovation Labs',
      description: 'Creating innovation programs that explore emerging technologies and drive competitive advantage.',
      features: ['AI/ML Initiatives', 'R&D Programs', 'PoC Development'],
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I Offer
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive technology leadership services to transform your organization
        </motion.p>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
