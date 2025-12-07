import type { SiteConfig } from '../types';

export const config: SiteConfig = {
  siteDetails: {
    name: "Thanganila Pet Care",
    description: "Exclusive premium care, breeds, and products for your canine companions.",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    whatsapp: "15551234567", 
    email: "woof@thanganila.com",
    address: "123 Wagging Tail Blvd, Dogsvilles, CA",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    }
  },
  hero: {
    title: "Unconditional Love, Delivered to You.",
    subtitle: "We specialize in healthy, happy puppies and premium care products. Find your new best friend today.",
    ctaText: "Find a Puppy",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  services: [
    {
      id: "medical",
      title: "Veterinary Care",
      description: "State-of-the-art clinic for routine checkups, vaccinations, and surgeries.",
      icon: "Stethoscope",
      features: ["24/7 Emergency", "Vaccinations", "Dental Care"]
    },
    {
      id: "hostel",
      title: "Luxury Dog Hostel",
      description: "cage-free boarding with spacious play areas and overnight monitoring.",
      icon: "Home",
      features: ["AC Suites", "Playtime", "Grooming"]
    },
    {
      id: "grooming",
      title: "Spa & Grooming",
      description: "Full service grooming to keep your pup looking and smelling fresh.",
      icon: "Scissors",
      features: ["Bathing", "Styling", "Nail Trimming"]
    },
    {
      id: "training",
      title: "K9 Training",
      description: "Professional behavioral training for puppies and adults.",
      icon: "GraduationCap",
      features: ["Obedience", "Socialization", "Tricks"]
    }
  ],
  breeds: [
    {
      id: "b1",
      name: "Golden Retriever",
      priceRange: "$1000 - $2500",
      description: "Friendly, intelligent, and devoted. The perfect family companion.",
      image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=800&auto=format&fit=crop",
      temperament: "Intelligent, Friendly, Devoted",
      size: "Large"
    },
    {
      id: "b2",
      name: "French Bulldog",
      priceRange: "$2000 - $4000",
      description: "Adaptable, playful, and smart. Great for city living.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
      temperament: "Playful, Adaptable, Smart",
      size: "Small"
    },
    {
      id: "b3",
      name: "German Shepherd",
      priceRange: "$1200 - $3000",
      description: "Confident, courageous, and smart. Excellent working dogs.",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=800&auto=format&fit=crop",
      temperament: "Confident, Courageous, Smart",
      size: "Large"
    },
    {
      id: "b4",
      name: "Poodle",
      priceRange: "$1500 - $3000",
      description: "Active, proud, and very smart. Available in standard, miniature, and toy.",
      image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?q=80&w=800&auto=format&fit=crop",
      temperament: "Active, Proud, Very Smart",
      size: "Medium"
    }
  ],
  bundles: [
    {
      id: "ppu",
      name: "Puppy Starter Pocket",
      price: "$150",
      description: "Everything a new puppy parent needs for the first month.",
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=800&auto=format&fit=crop", 
      items: ["Training Pads", "Puppy Food", "Chew Toy", "Leash & Collar"]
    },
    {
      id: "groom",
      name: "Home Grooming Kit",
      price: "$85",
      description: "Professional grade tools for home maintenance.",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
      items: ["Brush", "Nail Clipper", "Shampoo", "Conditioner"]
    },
    {
      id: "walk",
      name: "Adventure Bundle",
      price: "$65",
      description: "Gear for the great outdoors.",
      image: "https://images.unsplash.com/photo-1605631091305-641267f5df55?q=80&w=800&auto=format&fit=crop",
      items: ["Retractable Leash", "Collapsible Bowl", "Waste Bags", "Harness"]
    }
  ],
  products: [
    {
      id: "p1",
      name: "Premium Kibble",
      price: "$45.00",
      description: "Grain-free, high-protein formula for active adult dogs.",
      image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=800&auto=format&fit=crop",
      category: "food"
    },
    {
      id: "p2",
      name: "Orthopedic Bed",
      price: "$85.00",
      description: "Memory foam support for older dogs.",
      image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=800&auto=format&fit=crop",
      category: "accessories"
    },
    {
      id: "p3",
      name: "Tough Chewer Bone",
      price: "$15.00",
      description: "Virtually indestructible nylon bone.",
      image: "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=800&auto=format&fit=crop",
      category: "toys"
    },
    {
      id: "p4",
      name: "Flea & Tick Prevention",
      price: "$45.00",
      description: "Monthly topical treatment.",
      image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=800&auto=format&fit=crop",
      category: "medicine"
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Sarah Jenkins",
      content: "The hostel facility is amazing. I felt so safe leaving my Bella there.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "t2",
      name: "Mike Ross",
      content: "Got the Puppy Starter Pocket and it was a lifesaver. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "t3",
      name: "Emily Clarke",
      content: "The grooming team is so gentle with my nervous poodle. Best in town.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    }
  ]
};
