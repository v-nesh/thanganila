import React from 'react';
import { config } from '../data/config';
import { SectionWrapper } from '../components/SectionWrapper';
import { PawPrint, Stethoscope, Scissors, HeartHandshake, Home, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  'PawPrint': PawPrint,
  'Stethoscope': Stethoscope,
  'Scissors': Scissors,
  'HeartHandshake': HeartHandshake,
  'Home': Home,
  'GraduationCap': GraduationCap
};

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Care Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide top-notch care for your beloved pets, ensuring they stay happy and healthy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {config.services.map((service) => {
          const Icon = iconMap[service.icon] || PawPrint;
          
          return (
            <div 
              key={service.id} 
              className="p-8 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {service.description}
              </p>
              
              {service.features && (
                <ul className="space-y-2 w-full text-left bg-white/50 p-4 rounded-xl">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-600 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
