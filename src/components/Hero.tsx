import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Clock, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import WaveSection from './WaveSection';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: "/Solar Power plant q.jpg",
      title: "Solar Power Plant",
      description: "Sustainable energy powering our water treatment facility"
    },
    {
      image: "/Storage tanks 2.jpg",
      title: "Water Storage Tanks",
      description: "Large capacity storage ensuring continuous supply"
    },
    {
      image: "/Power backupsGenerators.png",
      title: "Backup Generators",
      description: "Reliable power backup systems for uninterrupted service"
    },
    {
      image: "/Emergency Crew.png",
      title: "Emergency Response Team",
      description: "24/7 emergency crew ready to respond to any issues"
    },
    {
      image: "/JWS staff.png",
      title: "Professional Staff",
      description: "Experienced team ensuring quality water service"
    },
    {
      image: "/Main storage tank @ Barcalen.png",
      title: "Main Storage Tank",
      description: "Primary water storage facility at Barcalen"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { key: 'households', value: '5,500+', icon: Shield },
    { key: 'uptime', value: '99.2%', icon: Clock },
    { key: 'pressure', value: '2.5 bar', icon: Droplets },
    { key: 'tests', value: '30+', icon: Shield },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sand/30 to-sky-blue/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-blue/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-sky-blue/10 text-ocean-blue px-4 py-2 rounded-full text-sm font-medium"
              >
                <Droplets className="w-4 h-4" />
                <span>Municipal Water Utility</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-deep-navy leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  {t('hero.title')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue to-sky-blue"
                >
                  {t('hero.subtitle')}
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 font-inter leading-relaxed max-w-2xl"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#apply"
                className="group bg-gradient-to-r from-ocean-blue to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+252907123456"
                className="group flex items-center justify-center space-x-3 bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-ocean-blue hover:text-ocean-blue transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5 text-red-500" />
                <span>Emergency: +252 907 123 456</span>
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <stat.icon className="w-4 h-4 text-ocean-blue" />
                    <span className="text-2xl font-bold font-mono text-deep-navy">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-inter">
                    {t(`stats.${stat.key}`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Image Slider */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent"></div>
                    
                    {/* Slide Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                      <p className="text-sm opacity-90">{slide.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-blue font-mono">10+</div>
                <div className="text-sm text-gray-600 font-inter">Years</div>
                <div className="text-sm text-gray-600 font-inter">Serving</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-sky-blue to-ocean-blue p-4 rounded-2xl shadow-xl text-white"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <div>
                  <div className="font-bold">ISO Standards</div>
                  <div className="text-sm opacity-90">Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <WaveSection />
    </section>
  );
};

export default Hero;