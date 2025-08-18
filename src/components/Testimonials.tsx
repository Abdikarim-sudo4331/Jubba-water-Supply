import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      nameLocal: 'Axmed Xasan',
      location: 'Kismayo Central',
      locationLocal: 'Kismayo Dhexe',
      rating: 5,
      text: 'Excellent service! Clean water 24/7 and very reasonable prices. The installation was quick and professional.',
      textLocal: 'Adeeg aad u fiican! Biyo nadiif ah 24/7 iyo qiimo macquul ah. Rakibiddu waxay ahayd mid degdeg ah oo xirfad leh.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Fatima Ali',
      nameLocal: 'Faaduma Cali',
      location: 'Kismayo North',
      locationLocal: 'Kismayo Waqooyi',
      rating: 5,
      text: 'Finally, reliable water supply for our family. The quality is excellent and customer service is very helpful.',
      textLocal: 'Ugu dambeyntii, biyo la isku hallayn karo oo qoyskayaga u gaar ah. Tayadu waa fiican tahay adeegga macaamiishuna waa caawiya.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Mohamed Omar',
      nameLocal: 'Maxamed Cumar',
      location: 'Business Owner',
      locationLocal: 'Milkiile Ganacsi',
      rating: 5,
      text: 'Great for our restaurant business. Consistent pressure and clean water. Billing is transparent and fair.',
      textLocal: 'Waa fiican ganacsigayaga makhaayadda. Cadaadis joogto ah iyo biyo nadiif ah. Biilku waa cad yahay oo xaq ah.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Amina Yusuf',
      nameLocal: 'Aaminah Yuusuf',
      location: 'Kismayo South',
      locationLocal: 'Kismayo Koonfur',
      rating: 5,
      text: 'Very satisfied with the service. Water quality is much better than before and the team is professional.',
      textLocal: 'Aad baan ugu qanacsanahay adeegga. Tayada biyahu waa ka fiican tahay sidii hore kooxduna waa xirfad leh.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sand/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-deep-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Trusted by thousands of families and businesses across Kismayo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 relative">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-sky-blue to-ocean-blue p-2 rounded-full">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 font-inter mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-sky-blue font-inter mb-6 italic">
                  "{testimonial.textLocal}"
                </p>

                {/* Customer info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-deep-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-inter">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
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
          <p className="text-lg text-gray-600 font-inter mb-6">
            Join thousands of satisfied customers in Kismayo
          </p>
          <a
            href="#apply"
            className="inline-flex items-center bg-gradient-to-r from-ocean-blue to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply for Connection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;