import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, Droplets } from 'lucide-react';

const About: React.FC = () => {
  const objectives = [
    "To be the leading water supply company in Jubbaland regions in terms of superiority, safety and trustworthiness.",
    "Advance the consistency of water supply and raise the population's access to pure water.",
    "Execute the global water supply standards in customers' safety.",
    "Make sure Jubbaland inhabitants and businesses have access to reliable and affordable water service that is increasingly clean and competitively priced.",
    "Prop up local economic strength through employment generation and tax pay.",
    "To provide 24/7 operation and quick response to machine failure and tap breakdowns."
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-deep-navy mb-4">
            About Jubba Water Supply
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Serving Kismayo with clean, reliable water since 2013
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Company History */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-ocean-blue to-sky-blue p-3 rounded-2xl">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-deep-navy">Our Story</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 font-inter leading-relaxed">
              <p className="mb-4">
                Water supply condition of Kismayo city has been in a terrible situation since 1991 in which the Somali civil war began. A major project funded by the government used supply water to the town from Jubba River around Yontoy village Since then, people fetched water from shallow wells which were neither sufficient nor healthy.
              </p>
              <p className="mb-4">
                Recently, Jubba Water Supply (JWS) and another company launched water supply projects throughout the different villages of Kismayo. JWS has been founded by local businessmen in February 2013. Installing piped water operations began in 2017.
              </p>
              <p>
                The quality and sufficiency of JWS's water has been verified by labs and water experts abroad.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-blue/10 to-ocean-blue/10 p-8 rounded-3xl border-2 border-sky-blue/20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-sky-blue to-ocean-blue p-3 rounded-2xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-deep-navy">Our Vision</h3>
              </div>
              <p className="text-gray-700 font-inter leading-relaxed italic">
                "To become the best provider of clean, safe, and quality water at competitive price, whilst promoting long-term relationship with all community members in Jubbaland State by 2030"
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ocean-blue/10 to-sky-blue/10 p-8 rounded-3xl border-2 border-ocean-blue/20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-ocean-blue to-sky-blue p-3 rounded-2xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-deep-navy">Our Mission</h3>
              </div>
              <p className="text-gray-700 font-inter leading-relaxed italic">
                "JWS's mission is to enhance the lives of its customers currently living in Kismayo by providing quality water services through the use of appropriate technology, skilled employees, sound management and environmentally sustainable practices"
              </p>
            </motion.div>
          </div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-deep-navy">Our Objectives</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-2xl hover:bg-sky-blue/5 transition-colors"
                >
                  <div className="bg-gradient-to-r from-sky-blue to-ocean-blue p-1.5 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;