import React, { useState } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { config } from '../data/config';
import { Button } from '../components/Button';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, cn } from '../utils';
import { Reveal } from '../components/Reveal';

export const Products: React.FC = () => {
  const { products, contact } = config;
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'accessories' | 'toys' | 'medicine'>('all');

  const categories = ['all', 'food', 'accessories', 'toys', 'medicine'] as const;

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleBuyClick = (productName: string) => {
    window.open(generateWhatsAppLink(contact.whatsapp, `order for ${productName}`), '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SectionWrapper bg="transparent">
        <div className="text-center mb-12">
          <Reveal>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Curated Dog Essentials</h1>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
               Everything your dog needs for a happy, healthy life.
             </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center flex-wrap gap-2">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all border",
                     activeCategory === cat 
                       ? "bg-primary text-white border-primary shadow-lg" 
                       : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
                <div className="h-56 relative overflow-hidden p-4 flex items-center justify-center bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white px-2 py-1 rounded-md shadow-sm">
                       {product.category}
                     </span>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="ghost" className="gap-2" onClick={() => handleBuyClick(product.name)}>
                      <MessageCircle size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};
