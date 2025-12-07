import React from 'react';
import { config } from '../data/config';
import { Button } from '../components/Button';
import { generateWhatsAppLink } from '../utils';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Spotlight } from '../components/Spotlight';
import { FloatingCards } from '../components/FloatingCards';

export const HeroTrending: React.FC = () => {
  const { hero, contact } = config;

  const handleCtaClick = () => {
    const link = generateWhatsAppLink(contact.whatsapp, "I'm interested in a puppy!");
    window.open(link, '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#fb923c" />
      
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:pt-20 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Main Text Content - Left Aligned on Desktop */}
        <div className="text-center md:text-left order-1 md:order-1 flex flex-col justify-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-400 font-serif tracking-tight mb-6 leading-[1.1]"
            >
                Unconditional <br/> Love, Delivered.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base md:text-lg lg:text-xl text-neutral-500 max-w-lg mx-auto md:mx-0 mb-8 font-light leading-relaxed"
            >
                {hero.subtitle} Experience the joy of bringing home a healthy, happy puppy from the city's #1 trusted source.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
                <Button size="lg" onClick={handleCtaClick} className="w-full sm:w-auto rounded-full h-12 md:h-14 px-8 text-base md:text-lg shadow-2xl hover:shadow-orange-500/20 transition-all bg-orange-500 hover:bg-orange-600 border-none text-white">
                    Find a Puppy <MessageCircle className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open(contact.socials.instagram, '_blank')} className="w-full sm:w-auto rounded-full h-12 md:h-14 px-8 text-base md:text-lg hover:bg-neutral-50 border-neutral-200">
                    Gallery <ArrowRight className="ml-2" size={18} />
                </Button>
            </motion.div>
        </div>

        {/* Visual Composition - Right Side */}
        <div className="w-full relative h-[50vh] md:h-full flex items-center justify-center order-2 md:order-2">
            <FloatingCards image={hero.image} />
        </div>

        {/* Bottom Marquee/Badge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/50 backdrop-blur-sm border-t border-neutral-200 py-4">
             <div className="flex animate-marquee whitespace-nowrap gap-12 text-neutral-400 font-bold uppercase tracking-widest text-xs items-center justify-center opacity-70">
                 <span>Premium Quality</span>
                 <span>•</span>
                 <span>Ethically Bred</span>
                 <span>•</span>
                 <span>Vet Checked</span>
                 <span>•</span>
                 <span>Health Guarantee</span>
                 <span>•</span>
                 <span>Lifetime Support</span>
                 <span>•</span>
                 <span>Premium Quality</span>
                 <span>•</span>
                 <span>Ethically Bred</span>
             </div>
        </div>

      </div>
    </section>
  );
};
