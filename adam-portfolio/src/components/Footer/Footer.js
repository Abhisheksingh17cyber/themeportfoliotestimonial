import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, link: 'mailto:adam@example.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2 className="footer-logo">
                ADAM<span>.</span>
              </h2>
              <p>
                Software Head & Technology Leader passionate about building 
                innovative solutions and leading high-performing teams.
              </p>
              <div className="footer-socials">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-services">
              <h3>Services</h3>
              <ul>
                <li>Technical Leadership</li>
                <li>Software Architecture</li>
                <li>Team Building</li>
                <li>Digital Transformation</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Stay Updated</h3>
              <p>Subscribe to get updates on my latest projects and articles.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {currentYear} Adam Smith. Made with <FiHeart className="heart-icon" /> using React
          </p>
          <motion.div
            className="back-to-top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="hero" smooth={true} duration={800}>
              <FiArrowUp />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
