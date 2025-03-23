import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div>
            <a href="#" className="text-2xl font-display font-bold tracking-tighter mb-6 inline-block">
              Lumi<span className="text-blue-500">.</span>
            </a>
            
            <p className="text-muted-foreground mb-6 max-w-xs">
              Creating powerful tools for designers and creative professionals since 2023.
            </p>
            
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-blue-50 transition-colors"
                >
                  <div className="w-5 h-5 bg-gray-300 rounded"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            
            <ul className="space-y-4">
              {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR', 'Accessibility'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Design Street, Creative City, 94103
                </span>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:hello@lumi.design" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@lumi.design
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumi Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
