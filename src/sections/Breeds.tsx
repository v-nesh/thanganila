import React from 'react';
import { config } from '../data/config';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { generateWhatsAppLink } from '../utils';
import { MessageCircle } from 'lucide-react';

export const Breeds: React.FC = () => {
  const { breeds, contact } = config;

  const handleEnquireClick = (breedName: string) => {
    const link = generateWhatsAppLink(contact.whatsapp, `inquiry about ${breedName} puppy`);
    window.open(link, '_blank');
  };

  return (
    <SectionWrapper id="breeds" bg="white">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-wider uppercase text-sm">Perfect Companions</span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Meet Our Puppies</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ethically bred, fully vaccinated, and ready to find their forever homes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {breeds.map((breed) => (
          <div 
            key={breed.id} 
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
          >
            {/* Image Area */}
            <div className="h-72 overflow-hidden relative">
              <img 
                src={breed.image} 
                alt={breed.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <p className="text-white text-sm font-medium">{breed.temperament}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-800 shadow-sm">
                {breed.size}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{breed.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {breed.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                 <span className="font-bold text-lg text-gray-900">{breed.priceRange}</span>
                 <Button 
                   size="sm" 
                   className="gap-2 rounded-xl"
                   onClick={() => handleEnquireClick(breed.name)}
                 >
                   Enquire <MessageCircle size={16} />
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
