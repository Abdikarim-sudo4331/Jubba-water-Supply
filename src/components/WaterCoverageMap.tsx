import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Droplets, Zap } from 'lucide-react';

const WaterCoverageMap: React.FC = () => {
  const coverageStats = [
    {
      icon: MapPin,
      title: 'Coverage Areas',
      value: '4 Districts',
      description: 'Central, North, South & East Kismayo',
      color: 'from-blue-500 to-sky-600',
    },
    {
      icon: Users,
      title: 'Households Connected',
      value: '5,500+',
      description: 'Families with reliable water access',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Droplets,
      title: 'Daily Capacity',
      value: '2.5M Liters',
      description: 'Fresh water distributed daily',
      color: 'from-ocean-blue to-sky-blue',
    },
    {
      icon: Zap,
      title: 'Network Pressure',
      value: '2.5 Bar',
      description: 'Consistent pressure maintained',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-deep-navy mb-4">
            Water Distribution Network
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Comprehensive coverage across Kismayo with expanding infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/JWS_Existing_Water_Networks_page-0001 (1).jpg"
                alt="Jubba Water Supply Distribution Network Map - Kismayo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 to-transparent"></div>
              
              {/* Map overlay info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl">
                  <h3 className="font-poppins font-bold text-deep-navy mb-2">
                    Current Network Coverage
                  </h3>
                  <p className="text-sm text-gray-700 font-inter">
                    Existing water distribution infrastructure serving Kismayo districts
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-ocean-blue to-sky-blue text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-mono">85%</div>
                <div className="text-sm">Coverage</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coverage Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              {coverageStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-bold text-deep-navy text-lg mb-1">
                          {stat.title}
                        </h3>
                        <div className="text-3xl font-bold text-ocean-blue font-mono mb-2">
                          {stat.value}
                        </div>
                        <p className="text-gray-600 font-inter text-sm">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expansion Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-sky-blue/10 to-ocean-blue/10 p-6 rounded-3xl border-2 border-sky-blue/20"
            >
              <h4 className="font-poppins font-bold text-deep-navy mb-3">
                Network Expansion 2025
              </h4>
              <p className="text-gray-700 font-inter mb-4">
                We're expanding our network to serve additional areas in East Kismayo 
                and surrounding villages. New connections will be available Q2 2025.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center text-ocean-blue hover:text-sky-blue font-semibold transition-colors"
              >
                Register Interest
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterCoverageMap;