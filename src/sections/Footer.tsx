import React from 'react';
import { config } from '../data/config';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const { contact, siteDetails } = config;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">{siteDetails.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              {siteDetails.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Products', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0" size={18} />
                <a href={`tel:${contact.phone}`} className="hover:text-white">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="shrink-0" size={18} />
                <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {contact.socials.instagram && (
                <a 
                  href={contact.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {contact.socials.facebook && (
                <a 
                  href={contact.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {siteDetails.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
