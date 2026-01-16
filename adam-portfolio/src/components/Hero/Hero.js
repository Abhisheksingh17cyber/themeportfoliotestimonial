import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import TechAnimation from '../TechAnimation/TechAnimation';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Software Head',
    'Tech Leader',
    'Full Stack Developer',
    'System Architect',
    'Innovation Driver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="hero">
      <TechAnimation />
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1 className="hero-name" variants={itemVariants}>
            ADAM <span className="highlight">SMITH</span>
          </motion.h1>

          <motion.div className="hero-title-wrapper" variants={itemVariants}>
            <span className="hero-title">
              <span className="typed-text">{text}</span>
              <span className="cursor">|</span>
            </span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Passionate technology leader with 10+ years of experience in building 
            scalable software solutions, leading high-performing teams, and driving 
            digital transformation across Fortune 500 companies.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <FiArrowRight />
              </motion.button>
            </Link>
            <motion.a
              href="/resume.pdf"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              Download CV <FiDownload />
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {[
              { icon: FiGithub, link: 'https://github.com' },
              { icon: FiLinkedin, link: 'https://linkedin.com' },
              { icon: FiTwitter, link: 'https://twitter.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <div className="image-bg"></div>
            <motion.div
              className="image-container"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>A</span>
                </div>
              </div>
            </motion.div>
            <div className="floating-elements">
              <motion.div
                className="floating-card card-1"
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span>10+</span>
                <p>Years Exp.</p>
              </motion.div>
              <motion.div
                className="floating-card card-2"
                animate={{
                  rotate: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span>50+</span>
                <p>Projects</p>
              </motion.div>
              <motion.div
                className="floating-card card-3"
                animate={{
                  rotate: [0, 5, 0],
                  x: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span>100+</span>
                <p>Team Led</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
