import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Menu, 
  X, 
  Globe,
  AlertTriangle,
  CheckCircle,
  Home,
  MapPin,
  Shield,
  Headphones,
  CreditCard,
  UserPlus,
  Phone
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  // Service status - in real app this would come from API
  const serviceStatus = 'operational'; // 'operational' | 'maintenance' | 'low_pressure'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home', icon: 'home' },
    { key: 'services', href: '#services', icon: 'droplets' },
    { key: 'support', href: '#support', icon: 'headphones' },
    { key: 'about', href: '#about', icon: 'info' },
  ];

  const secondaryNavItems = [
  ];

  const getNavIcon = (iconName: string) => {
    switch (iconName) {
      case 'home': return <Home className="w-4 h-4" />;
      case 'droplets': return <Droplets className="w-4 h-4" />;
      case 'map': return <MapPin className="w-4 h-4" />;
      case 'headphones': return <Headphones className="w-4 h-4" />;
      case 'info': return <Shield className="w-4 h-4" />;
      case 'bell': return <AlertTriangle className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusColor = () => {
    switch (serviceStatus) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'low_pressure': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = () => {
    switch (serviceStatus) {
      case 'operational': return <CheckCircle className="w-3 h-3" />;
      case 'maintenance': return <AlertTriangle className="w-3 h-3" />;
      case 'low_pressure': return <AlertTriangle className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-sky-blue to-ocean-blue p-2.5 rounded-2xl shadow-md">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-poppins font-bold text-deep-navy">
                  Jubba Water Supply
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block font-inter">
                  {t('footer.tagline')}
                </p>
              </div>
            </motion.div>

            {/* Service Status & Language Switcher */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
                {getStatusIcon()}
                <span>
                  {serviceStatus === 'operational' && 'Live'}
                  {serviceStatus === 'maintenance' && 'Maintenance'}
                  {serviceStatus === 'low_pressure' && 'Low Pressure'}
                </span>
              </div>
              
              <button
                onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            <img 
              src="/JWS Logo.png" 
              alt="Jubba Water Supply Logo" 
              className="h-12 w-12 object-contain"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Primary Navigation */}
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="relative flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-ocean-blue hover:bg-sky-blue/5 rounded-xl transition-all duration-200 group"
                >
                  {getNavIcon(item.icon)}
                  <span>{t(`nav.${item.key}`)}</span>
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-ocean-blue to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                </a>
              ))}
              
              {/* Divider */}
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#pay"
                  className="flex items-center space-x-2 text-ocean-blue hover:text-sky-blue font-medium px-4 py-2.5 rounded-xl hover:bg-sky-blue/5 transition-all duration-200"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{t('nav.payBill')}</span>
                </a>
                <a
                  href="#apply"
                  className="flex items-center space-x-2 bg-gradient-to-r from-ocean-blue to-sky-blue text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{t('nav.apply')}</span>
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="space-y-1">
                  {/* Primary Navigation */}
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 text-gray-700 hover:text-ocean-blue hover:bg-sky-blue/5 font-medium transition-all duration-200 py-3 px-4 rounded-xl"
                      >
                        {getNavIcon(item.icon)}
                        <span>{t(`nav.${item.key}`)}</span>
                      </a>
                    ))}
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4"></div>
                  
                  {/* Mobile CTAs */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-gray-100">
                    <a
                      href="#pay"
                      className="flex items-center justify-center space-x-2 border-2 border-ocean-blue text-ocean-blue px-6 py-3 rounded-full font-semibold text-center hover:bg-ocean-blue hover:text-white transition-all duration-200"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>{t('nav.payBill')}</span>
                    </a>
                    <a
                      href="#apply"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-ocean-blue to-sky-blue text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>{t('nav.apply')}</span>
                    </a>
                    
                    {/* Mobile Status & Language */}
                    <div className="flex items-center justify-between pt-4">
                      <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
                        {getStatusIcon()}
                        <span>
                          {serviceStatus === 'operational' && 'Live'}
                          {serviceStatus === 'maintenance' && 'Maintenance'}
                          {serviceStatus === 'low_pressure' && 'Low Pressure'}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
                        className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>{language.toUpperCase()}</span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;