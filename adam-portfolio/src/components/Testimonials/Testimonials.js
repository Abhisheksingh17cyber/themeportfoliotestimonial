import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FiStar, FiLinkedin } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechGiant Inc.',
      image: '/testimonial1.jpg',
      text: 'Adam is one of the most talented engineering leaders I\'ve worked with. His ability to translate complex technical concepts into business value is remarkable. He transformed our entire development culture.',
      rating: 5,
      company: 'TechGiant Inc.',
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering, StartupX',
      image: '/testimonial2.jpg',
      text: 'Working with Adam was a game-changer for our organization. His strategic vision and hands-on leadership helped us scale from a small team to a 100+ person engineering department.',
      rating: 5,
      company: 'StartupX',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, InnovateCorp',
      image: '/testimonial3.jpg',
      text: 'Adam\'s technical expertise combined with his exceptional communication skills makes him a rare find. He delivered our most critical project on time and under budget.',
      rating: 5,
      company: 'InnovateCorp',
    },
    {
      name: 'David Park',
      role: 'Product Director, CloudSolutions',
      image: '/testimonial4.jpg',
      text: 'I\'ve had the pleasure of collaborating with Adam on multiple projects. His attention to detail and commitment to excellence consistently delivers outstanding results.',
      rating: 5,
      company: 'CloudSolutions',
    },
    {
      name: 'Lisa Thompson',
      role: 'Engineering Manager, DataFlow',
      image: '/testimonial5.jpg',
      text: 'Adam is not just a technical leader but a mentor who genuinely invests in his team\'s growth. His guidance helped me advance my career significantly.',
      rating: 5,
      company: 'DataFlow',
    },
  ];

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by industry leaders and teams worldwide
        </motion.p>

        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -10 }}
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <div className="avatar-placeholder">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FiLinkedin />
                    </motion.a>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="star-icon" />
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <div className="testimonial-company">
                    {testimonial.company}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="clients-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Trusted By Industry Leaders</h3>
          <div className="clients-logos">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((client, index) => (
              <motion.div
                key={client}
                className="client-logo"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
