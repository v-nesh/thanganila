export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[]; // Added specific features list
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'food' | 'accessories' | 'toys' | 'medicine';
}

export interface Breed {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  image: string;
  temperament: string;
  size: 'Small' | 'Medium' | 'Large';
}

export interface Bundle {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface SiteConfig {
  siteDetails: {
    name: string;
    description: string;
    logo?: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    socials: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  services: Service[];
  breeds: Breed[];
  bundles: Bundle[];
  products: Product[];
  testimonials: Testimonial[];
}
