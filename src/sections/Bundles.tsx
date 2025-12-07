import React from 'react';
import { config } from '../data/config';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { generateWhatsAppLink } from '../utils';
import { Check, Package } from 'lucide-react';

export const Bundles: React.FC = () => {
  const { bundles, contact } = config;

  const handleBuyClick = (bundleName: string) => {
    const link = generateWhatsAppLink(contact.whatsapp, `${bundleName} bundle`);
    window.open(link, '_blank');
  };

  return (
    <SectionWrapper id="bundles" bg="gray" className="relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Best Value</span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Doggy Bundles</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Curated pockets of happiness for every stage of your dog's life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {bundles.map((bundle, index) => (
          <div 
            key={bundle.id} 
            className={`
              relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col
              ${index === 1 ? 'md:-mt-8 md:mb-8 border-primary/20 shadow-md transform scale-105 z-10' : ''}
            `}
          >
             {index === 1 && (
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                 MOST POPULAR
               </div>
             )}

             <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto">
                <Package size={32} />
             </div>

             <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{bundle.name}</h3>
             <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">{bundle.price}</span>
             </div>
             
             <p className="text-gray-500 text-center mb-8 text-sm">{bundle.description}</p>

             <ul className="space-y-4 mb-8 flex-1">
                {bundle.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 shrink-0">
                      <Check size={12} />
                    </div>
                    {item}
                  </li>
                ))}
             </ul>

             <Button 
               fullWidth 
               variant={index === 1 ? 'primary' : 'outline'}
               onClick={() => handleBuyClick(bundle.name)}
             >
               Get Bundle
             </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
