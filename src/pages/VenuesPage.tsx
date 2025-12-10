import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { venues } from "@/data/venues";

const VenuesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
              Our Collection
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Stunning Venues
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              From intimate gatherings to grand celebrations, discover the perfect 
              space for your next unforgettable event.
            </p>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Included Amenities
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-4">
              Every venue includes our premium services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Dedicated Event Coordinator",
              "Premium Catering Options",
              "Professional Audio/Visual",
              "Complimentary WiFi",
              "Customizable Lighting",
              "Valet Parking",
              "Coat Check Service",
              "Security Personnel",
            ].map((amenity) => (
              <div
                key={amenity}
                className="bg-card rounded-lg p-4 text-center shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <p className="font-body text-foreground">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VenuesPage;
