import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Calculator,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [usage, setUsage] = useState('15');
  const [estimatedBill, setEstimatedBill] = useState(0);

  // Simple bill calculator
  React.useEffect(() => {
    const usageNum = parseFloat(usage) || 0;
    let cost = 0;
    
    if (usageNum <= 10) {
      cost = usageNum * 0.50;
    } else if (usageNum <= 20) {
      cost = 10 * 0.50 + (usageNum - 10) * 0.75;
    } else if (usageNum <= 50) {
      cost = 10 * 0.50 + 10 * 0.75 + (usageNum - 20) * 1.00;
    } else {
      cost = 10 * 0.50 + 10 * 0.75 + 30 * 1.00 + (usageNum - 50) * 1.25;
    }
    
    setEstimatedBill(cost);
  }, [usage]);

  const quickLinks = [
    { key: 'services', href: '#services' },
    { key: 'tariffs', href: '#tariffs' },
    { key: 'coverage', href: '#coverage' },
    { key: 'quality', href: '#quality' },
    { key: 'support', href: '#support' },
    { key: 'about', href: '#about' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Service Charter', href: '#charter' },
    { name: 'Procurement', href: '#procurement' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <footer className="bg-deep-navy text-white">
      {/* Bill Calculator Widget */}
      <div className="bg-gradient-to-r from-ocean-blue to-sky-blue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-3">
                <Calculator className="w-6 h-6" />
                <h3 className="text-xl font-poppins font-bold">Quick Bill Estimator</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium">Monthly Usage:</label>
                  <input
                    type="number"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-20 px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-mono"
                    placeholder="15"
                  />
                  <span className="text-sm">m³</span>
                </div>
                
                <ChevronRight className="w-4 h-4" />
                
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <span className="text-sm">Estimated Bill:</span>
                  <div className="text-xl font-bold font-mono">
                    ${estimatedBill.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-sky-blue to-ocean-blue p-3 rounded-2xl">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold">Jubba Water Supply</h3>
                    <p className="text-sky-blue font-inter">{t('footer.tagline')}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 font-inter leading-relaxed max-w-md">
                  Leading provider of clean, treated water in Kismayo and Jubbaland region. 
                  Committed to delivering reliable water supply services with the highest quality standards.
                </p>
                
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>Licensed Water Distributor</p>
                  <p>Jubbaland Ministry of Water & Energy</p>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-semibold mb-3">Stay Updated</h4>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-sky-blue"
                    />
                    <button className="bg-gradient-to-r from-sky-blue to-ocean-blue px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-poppins font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-sky-blue transition-colors font-inter flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        {t(`nav.${link.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-poppins font-bold text-lg mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-400 mt-1" />
                    <div>
                      <p className="font-semibold">Emergency 24/7</p>
                      <p className="text-gray-300">2140</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-sky-blue mt-1" />
                    <div>
                      <p className="font-semibold">Customer Service</p>
                      <p className="text-gray-300">+252 907 789 012</p>
                      <p className="text-sm text-gray-400">All days working except Friday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-sky-blue mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@jubbawater.so</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sky-blue mt-1" />
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-gray-300">Central Market Area</p>
                      <p className="text-gray-300">Kismayo, Jubbaland</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-inter">
                {t('footer.copyright')}
              </p>
              <p className="text-sm text-gray-500 font-inter mt-1">
                {t('footer.disclaimer')}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-sky-blue transition-colors font-inter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;