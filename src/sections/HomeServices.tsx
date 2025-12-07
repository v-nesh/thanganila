import React, { useState } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import {
  Scissors,
  Stethoscope,
  HeartHandshake,
  Baby,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  img: string;
  color: string;
  bgStart: string;
  bgEnd: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Premium Grooming",
    subtitle: "Spa & Styling",
    description:
      "Experience our luxury grooming services with organic products and expert stylists. We turn grooming into a relaxing spa day.",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop",
    color: "violet",
    bgStart: "from-violet-500",
    bgEnd: "to-purple-600",
    link: "/services",
  },
  {
    id: 2,
    title: "Ethical Adoption",
    subtitle: "Find Your Friend",
    description:
      "Connect with verified, ethical breeders. Every puppy comes with a health guarantee, vaccinations, and a lifetime of happiness.",
    icon: Baby,
    img: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2574&auto=format&fit=crop",
    color: "orange",
    bgStart: "from-orange-500",
    bgEnd: "to-amber-500",
    link: "/pets",
  },
  {
    id: 3,
    title: "Expert Veterinary",
    subtitle: "24/7 Care",
    description:
      "Comprehensive health support with our network of top-tier clinics. From regular checkups to emergency care, we have you covered.",
    icon: Stethoscope,
    img: "https://images.unsplash.com/photo-1628009368231-760335272a28?q=80&w=2670&auto=format&fit=crop",
    color: "emerald",
    bgStart: "from-emerald-500",
    bgEnd: "to-teal-600",
    link: "/services",
  },
  {
    id: 4,
    title: "Training Academy",
    subtitle: "Behavior & Skills",
    description:
      "Unlock your pet's potential with our positive reinforcement training. From basic manners to advanced tricks.",
    icon: HeartHandshake,
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2670&auto=format&fit=crop",
    color: "blue",
    bgStart: "from-blue-500",
    bgEnd: "to-indigo-600",
    link: "/services",
  },
];

export const HomeServices: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <SectionWrapper bg="white">
      <div className="mb-12 md:text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 leading-tight mb-4">
            Everything Your Pet Needs, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
              Under One Roof
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            We've reimagined pet care to be as joyful as the pets themselves.
            Choose a service to explore our offerings.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[600px] w-full items-stretch">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => setActiveId(service.id)}
              onHoverStart={() => setActiveId(service.id)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-gray-100 ${
                isActive ? "lg:flex-[3]" : "lg:flex-[1]"
              } min-h-[400px] lg:min-h-0 group`}
            >
              {/* Background Image (Darkened) */}
              <div className="absolute inset-0 bg-gray-900">
                <img
                  src={service.img}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? "scale-110 opacity-40" : "scale-100 opacity-20"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90" />
              </div>

              {/* Active Gradient Overlay */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgStart} ${service.bgEnd} mix-blend-overlay`}
                  />
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-20">
                <div className="mb-auto">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 transition-colors duration-500 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    <service.icon size={28} />
                  </div>
                </div>

                <div className="overflow-hidden">
                  <motion.div layout className="mb-2">
                    <span className="text-white/80 text-sm font-bold tracking-widest uppercase mb-2 block">
                      0{service.id} — {service.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold font-serif text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence mode="popLayout">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <p className="text-white/80 text-base leading-relaxed mb-8 max-w-lg">
                          {service.description}
                        </p>

                        <Link to={service.link}>
                          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                            Explore Service <ArrowUpRight size={18} />
                          </button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
