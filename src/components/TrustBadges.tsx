import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Beaker, Clock, Award } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Treated Water',
      subtitle: 'Multi-stage filtration',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Beaker,
      title: 'Daily Testing',
      subtitle: 'Quality monitoring',
      color: 'from-blue-500 to-sky-600',
    },
    {
      icon: Clock,
      title: '24/7 Supply',
      subtitle: 'Reliable pressure',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Award,
      title: 'ISO Standards',
      subtitle: 'Quality assured',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-sand/30 to-sky-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-deep-navy mb-4">
            Trust & Quality Assurance
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Your water quality is our top priority
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className={`bg-gradient-to-r ${badge.color} p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-deep-navy text-center mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600 font-inter text-center">
                  {badge.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;