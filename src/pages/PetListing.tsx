import React, { useState } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { config } from '../data/config';
import { Button } from '../components/Button';
import { MessageCircle, Search } from 'lucide-react';
import { generateWhatsAppLink } from '../utils';
import { Reveal } from '../components/Reveal';

export const PetListing: React.FC = () => {
  const { breeds, contact } = config;
  const [search, setSearch] = useState("");

  const filteredBreeds = breeds.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase()) || 
    b.temperament.toLowerCase().includes(search.toLowerCase())
  );

  const handleEnquire = (name: string) => {
    window.open(generateWhatsAppLink(contact.whatsapp, `enquiry about ${name} puppy`), '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SectionWrapper bg="transparent">
        <div className="text-center mb-12">
           <Reveal>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">Find Your New Best Friend</h1>
           </Reveal>
           <Reveal delay={0.1}>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
               Browse our available puppies. All ethically bred and health checked.
             </p>
           </Reveal>
           
           <Reveal delay={0.2}>
             <div className="max-w-md mx-auto relative">
               <input 
                 type="text" 
                 placeholder="Search by breed or temperament..." 
                 className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm outline-none transition-all"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             </div>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBreeds.map((breed, i) => (
            <Reveal key={breed.id} delay={i * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ring-1 ring-gray-100">
                <div className="h-80 overflow-hidden relative">
                   <img 
                     src={breed.image} 
                     alt={breed.name} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800">
                       {breed.size}
                     </span>
                   </div>
                </div>
                
                <div className="p-8">
                   <div className="flex justify-between items-start mb-4">
                     <h3 className="text-2xl font-bold text-gray-900 font-serif">{breed.name}</h3>
                     <span className="text-primary font-bold">{breed.priceRange}</span>
                   </div>
                   
                   <p className="text-gray-600 mb-6 leading-relaxed">
                     {breed.description}
                   </p>
                   
                   <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {breed.temperament.split(', ').map(t => (
                          <span key={t} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-md font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <Button fullWidth onClick={() => handleEnquire(breed.name)} className="gap-2">
                        Meet {breed.name} <MessageCircle size={18} />
                      </Button>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredBreeds.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No puppies found matching your search.</p>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};
