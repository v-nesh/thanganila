import React, { useState } from 'react';
import { config } from '../data/config';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';
import { generateWhatsAppLink } from '../utils';
import { MessageCircle } from 'lucide-react';
import { cn } from '../utils';

export const Products: React.FC = () => {
  const { products, contact } = config;
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'accessories' | 'toys' | 'medicine'>('all');

  const categories = ['all', 'food', 'accessories', 'toys', 'medicine'] as const;

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleEnquireClick = (productName: string) => {
    const link = generateWhatsAppLink(contact.whatsapp, `enquiry for ${productName}`);
    window.open(link, '_blank');
  };

  return (
    <SectionWrapper id="products" bg="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dog Care Essentials</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Premium supplies for health, play, and comfort.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={cn(
                 "px-4 py-2 rounded-full text-sm font-medium capitalize transition-all",
                 activeCategory === cat 
                   ? "bg-primary text-white shadow-md transform scale-105" 
                   : "bg-white text-gray-600 hover:bg-gray-100"
               )}
             >
               {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
          >
            <div className="h-48 overflow-hidden relative p-4 bg-gray-50 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="mb-2">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                 <span className="text-lg font-bold text-primary">{product.price}</span>
                 <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => handleEnquireClick(product.name)}
                    className="gap-2 text-gray-600 hover:text-primary"
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
