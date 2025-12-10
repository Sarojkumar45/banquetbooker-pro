import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VenueCard from "@/components/VenueCard";
import { venues } from "@/data/venues";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Clock, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Our team of dedicated professionals ensures every detail is perfect.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Custom menus, décor, and entertainment tailored to your vision.",
  },
  {
    icon: Clock,
    title: "Seamless Planning",
    description: "From consultation to celebration, we handle everything.",
  },
  {
    icon: Sparkles,
    title: "Unforgettable Moments",
    description: "Creating memories that last a lifetime.",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 bg-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
              Our Spaces
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Exquisite Venues
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Discover our collection of stunning venues, each designed to create
              the perfect ambiance for your special occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/venues">
              <Button variant="outline" size="lg">
                View All Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(38_65%_50%),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Create Your
              <span className="text-gold block">Perfect Event?</span>
            </h2>
            <p className="font-body text-xl text-cream/80 mb-8">
              Let us help you plan an unforgettable celebration. 
              Contact our events team today to schedule a private tour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking">
                <Button variant="hero" size="xl">
                  Book Your Date
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="elegant" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
