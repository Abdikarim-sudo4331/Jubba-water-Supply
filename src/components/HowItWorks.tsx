import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Wrench, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Request Connection',
      titleLocal: 'Codso Xidhiidh',
      description: 'Submit your application with property details and contact information.',
      descriptionLocal: 'Gudbi codsashadaada oo ku dar faahfaahinta guriga iyo xiriirka.',
    },
    {
      icon: Search,
      title: 'Site Survey & Quotation',
      titleLocal: 'Baaritaan Goob iyo Qiimo',
      description: 'Our technical team visits to assess requirements and provide cost estimate.',
      descriptionLocal: 'Kooxda farsamada ayaa booqanaysa si ay u qiimeeyaan baahiyaha oo ay bixiyaan qiimaha.',
    },
    {
      icon: Wrench,
      title: 'Installation & Meter',
      titleLocal: 'Rakibid iyo Mitir',
      description: 'Professional installation of pipes, connections, and water meter setup.',
      descriptionLocal: 'Rakibid xirfad leh oo tuubooyinka, xidhiidhka, iyo dejinta mitirka biyaha.',
    },
    {
      icon: CreditCard,
      title: 'Billing & Support',
      titleLocal: 'Biil iyo Taageero',
      description: 'Monthly billing begins with ongoing maintenance and customer support.',
      descriptionLocal: 'Biilka bishii ayaa bilaabmaya dayactirka joogtada ah iyo taageerada macaamiisha.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-deep-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Simple steps to get connected to clean, reliable water supply
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-sky-blue to-transparent z-0"></div>
              )}
              
              <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-sky-blue/30 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-ocean-blue to-sky-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-sky-blue/10 to-ocean-blue/10 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-ocean-blue" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-poppins font-bold text-deep-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-sky-blue font-medium mb-3">
                  {step.titleLocal}
                </p>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#apply"
            className="inline-flex items-center bg-gradient-to-r from-ocean-blue to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Application Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;