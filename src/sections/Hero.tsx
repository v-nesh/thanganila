import React from "react";
// import { Hero3D } from "../components/3d/Hero3D";
import { config } from "../data/config";
import { Button } from "../components/Button";
import { generateWhatsAppLink } from "../utils";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const { hero, contact } = config;

  const handleCtaClick = () => {
    const link = generateWhatsAppLink(
      contact.whatsapp,
      "I'm interested in a puppy!"
    );
    window.open(link, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white"
    >
      {/* <Hero3D /> */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-orange-100/50 border border-orange-200 text-orange-700 font-semibold text-sm mb-6 tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
              #1 Dog Shop in the City
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] font-serif">
              Unconditional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 italic">
                Love,
              </span>{" "}
              <br />
              Delivered to You.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          >
            {hero.subtitle} We specialize in healthy, happy puppies and premium
            care products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleCtaClick}
                className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 border-none"
              >
                Find a Puppy <MessageCircle className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(contact.socials.instagram, "_blank")}
                className="border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:bg-white bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                Our Gallery
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Happy Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">500+</p>
              <p className="text-sm text-gray-500">Happy Families</p>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden lg:block relative h-[600px] w-full"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
          <img
            src={hero.image}
            alt="Dog"
            className="relative z-10 object-contain w-full h-full drop-shadow-2xl"
          />
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-lg z-20 max-w-[150px]"
          >
            <p className="text-xs font-bold text-gray-400 uppercase mb-1">
              Top Pick
            </p>
            <p className="font-serif font-bold text-gray-900">
              Golden Retriever
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
