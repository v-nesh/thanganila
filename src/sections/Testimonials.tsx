import React from 'react';
import { config } from '../data/config';
import { SectionWrapper } from '../components/SectionWrapper';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = config;

  return (
    <SectionWrapper id="testimonials" bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Happy Customers</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See what pet parents are saying about us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary/20 transition-colors"
          >
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                  className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                {testimonial.role && (
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
