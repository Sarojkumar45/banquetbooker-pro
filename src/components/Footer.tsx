import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-4">
              Grand Majestic
            </h3>
            <p className="font-body text-lg text-cream/80 leading-relaxed">
              Where elegance meets excellence. Create unforgettable memories in our
              world-class banquet facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/venues" className="font-body text-lg text-cream/80 hover:text-gold transition-colors">
                Our Venues
              </Link>
              <Link to="/booking" className="font-body text-lg text-cream/80 hover:text-gold transition-colors">
                Book Now
              </Link>
              <Link to="/contact" className="font-body text-lg text-cream/80 hover:text-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-cream/80">
                <Phone size={18} className="text-gold" />
                <span className="font-body text-lg">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Mail size={18} className="text-gold" />
                <span className="font-body text-lg">events@grandmajestic.com</span>
              </div>
              <div className="flex items-start gap-3 text-cream/80">
                <MapPin size={18} className="text-gold mt-1" />
                <span className="font-body text-lg">
                  123 Luxury Avenue<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="font-body text-cream/60">
            © {new Date().getFullYear()} Grand Majestic Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
