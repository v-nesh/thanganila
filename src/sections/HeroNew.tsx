import React, { useRef } from "react";
// import { Hero3D } from '../components/3d/Hero3D';
import { config } from "../data/config";
import { Button } from "../components/Button";
import { generateWhatsAppLink } from "../utils";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroNew: React.FC = () => {
  const { hero, contact } = config;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleCtaClick = () => {
    const link = generateWhatsAppLink(
      contact.whatsapp,
      "I'm interested in a puppy!"
    );
    window.open(link, "_blank");
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[110vh] flex items-center overflow-hidden bg-slate-50"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

      {/* 3D Element Layer */}
      {/* <Hero3D /> */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - Left Side (7 cols) */}
          <motion.div
            style={{ y, opacity }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-8 w-fit">
                <span className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </span>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Top Rated Pet Shop
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-[1.1] font-serif tracking-tight">
                Find Your <br />
                <span className="transparent-text-stroke text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Soulmate
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl backdrop-blur-sm"
            >
              {hero.subtitle} Experience the joy of bringing home a healthy,
              happy puppy from a trusted source.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={handleCtaClick}
                className="h-16 px-10 rounded-full text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
              >
                Meet Puppies <MessageCircle className="ml-2" size={24} />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => window.open(contact.socials.instagram, "_blank")}
                className="h-16 px-8 text-lg hover:bg-white/50"
              >
                View Gallery <ArrowRight className="ml-2" size={24} />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-16 flex gap-12 border-t border-gray-200/50 pt-8"
            >
              <div>
                <p className="text-4xl font-bold text-gray-900 font-serif">
                  500+
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  Happy Families
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900 font-serif">
                  100%
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  Health Check
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content - Right Side (5 cols) */}
          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="relative z-10 w-full h-full"
            >
              {/* Glass Card Behind Image */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg rounded-[3rem] border border-white/20 shadow-2xl transform rotate-3" />

              <img
                src={hero.image}
                alt="Happy Dog"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-20 transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 -left-10 bg-white/90 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-xl z-30 border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Vet Checked</p>
                    <p className="text-xs text-gray-500">
                      Vaccinated & Healthy
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Start icon need import
import { Stethoscope } from "lucide-react";
