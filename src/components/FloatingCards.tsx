import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const FloatingCards = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center mt-4 md:mt-0">
        {/* Main Image with Glow */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 w-[60%] max-w-[300px] md:max-w-[450px]"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full blur-3xl" />
            <img 
                src={image} 
                alt="Hero Pet" 
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
            />
        </motion.div>

        {/* Orbiting Elements - Hidden on very small screens, simpler on mobile */}
        
        {/* Review Card */}
        <motion.div
            animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-4 left-4 md:top-20 md:left-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl z-30 border border-white/50 max-w-[150px] md:max-w-[200px]"
        >
            <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-[10px] md:text-xs font-medium text-gray-600">"Best place to find your fur baby! Highly recommended."</p>
            <p className="text-[10px] md:text-xs font-bold mt-2 text-gray-900">- Sarah J.</p>
        </motion.div>

        {/* Health Badge */}
        <motion.div
            animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="absolute bottom-4 right-4 md:bottom-20 md:right-20 bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl z-30 border border-white/50 flex items-center gap-2 md:gap-3"
        >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div>
                <p className="text-xs md:text-sm font-bold text-gray-900">Vet Verified</p>
                <p className="text-[8px] md:text-[10px] text-gray-500 uppercase">100% Healthy</p>
            </div>
        </motion.div>

        {/* Abstract Shapes */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 md:top-10 md:right-32 w-12 h-12 md:w-16 md:h-16 border-2 border-orange-300/30 rounded-full border-dashed z-10"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 md:bottom-10 md:left-32 w-16 h-16 md:w-24 md:h-24 border border-indigo-300/30 rounded-full z-10"
        />
    </div>
  );
};
