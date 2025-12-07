import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { config } from '../data/config';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink, getIcon } from '../utils';
import { Reveal } from '../components/Reveal';
import { Spotlight } from '../components/Spotlight';

export const ServiceDirectory: React.FC = () => {
  const { services, contact } = config;

  const handleBook = (serviceName: string) => {
    window.open(generateWhatsAppLink(contact.whatsapp, `booking for ${serviceName}`), '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 px-4">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#fb923c" />
        <div className="text-center relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal width="100%">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">World Class Care</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-serif leading-tight">
              Premium Services <br/> For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Premium Pets</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From grooming to training, we provide a holistic ecosystem to ensure your furry friend lives their best life.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Services Grid */}
      <SectionWrapper bg="transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <div className="group relative h-full bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                   
                   {/* Gradient Blob Background */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:from-orange-200/60 transition-colors duration-500" />

                   <div className="relative z-10 flex flex-col h-full">
                     {/* Icon */}
                     <div className="mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          <Icon size={32} />
                        </div>
                     </div>
                     
                     {/* Content */}
                     <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
                     <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                       {service.description}
                     </p>
                     
                     {/* Features List */}
                     <div className="space-y-4 mb-8">
                         <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent" />
                         {service.features && (
                           <ul className="space-y-3">
                             {service.features.slice(0, 4).map((feature, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                 <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                                 <span>{feature}</span>
                               </li>
                             ))}
                           </ul>
                         )}
                     </div>
                     
                     {/* CTA */}
                     <Button 
                        variant="ghost" 
                        fullWidth 
                        onClick={() => handleBook(service.title)}
                        className="mt-auto group-hover:bg-orange-50 group-hover:text-orange-600 justify-between group/btn"
                      >
                        Book Now
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                     </Button>
                   </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
};
