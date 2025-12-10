import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Square, Star } from "lucide-react";

interface VenueCardProps {
  id: string;
  name: string;
  image: string;
  capacity: number;
  area: string;
  description: string;
  price: number;
  featured?: boolean;
}

const VenueCard = ({
  id,
  name,
  image,
  capacity,
  area,
  description,
  price,
  featured = false,
}: VenueCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-gold text-cream px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={14} fill="currentColor" />
          <span className="font-body text-sm uppercase tracking-wide">Featured</span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          {name}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users size={16} className="text-primary" />
            <span className="font-body text-sm">Up to {capacity} guests</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Square size={16} className="text-primary" />
            <span className="font-body text-sm">{area}</span>
          </div>
        </div>

        <p className="font-body text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <div>
            <span className="font-body text-sm text-muted-foreground">Starting from</span>
            <p className="font-display text-2xl font-bold text-primary">
              ${price.toLocaleString()}
            </p>
          </div>
          <Link to={`/booking?venue=${id}`}>
            <Button variant="default" size="sm">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
