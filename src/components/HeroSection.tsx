import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBanquet from "@/assets/hero-banquet.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanquet})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="w-12 h-px bg-gold" />
            <span className="font-body text-gold uppercase tracking-[0.3em] text-sm">
              Welcome to
            </span>
            <span className="w-12 h-px bg-gold" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Grand Majestic
          </h1>

          {/* Subtitle */}
          <p className="font-display text-2xl md:text-3xl text-gold-light italic mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Banquet & Events
          </p>

          {/* Description */}
          <p className="font-body text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Experience unparalleled elegance in our world-class banquet halls. 
            Perfect for weddings, galas, and corporate celebrations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book Your Event
              </Button>
            </Link>
            <Link to="/venues">
              <Button variant="elegant" size="xl">
                Explore Venues
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};

export default HeroSection;
