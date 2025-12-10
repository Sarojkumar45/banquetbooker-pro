import grandBallroom from "@/assets/grand-ballroom.jpg";
import privateDining from "@/assets/private-dining.jpg";
import conferenceHall from "@/assets/conference-hall.jpg";

export interface Venue {
  id: string;
  name: string;
  image: string;
  capacity: number;
  area: string;
  description: string;
  price: number;
  featured: boolean;
  amenities: string[];
}

export const venues: Venue[] = [
  {
    id: "grand-ballroom",
    name: "Grand Ballroom",
    image: grandBallroom,
    capacity: 500,
    area: "8,000 sq ft",
    description: "Our stunning Grand Ballroom features soaring ceilings, crystal chandeliers, and elegant marble floors. Perfect for weddings, galas, and grand celebrations.",
    price: 15000,
    featured: true,
    amenities: [
      "Crystal Chandeliers",
      "Built-in Sound System",
      "Dance Floor",
      "Bridal Suite",
      "Valet Parking",
      "Full Catering Kitchen"
    ]
  },
  {
    id: "private-dining",
    name: "Private Dining Room",
    image: privateDining,
    capacity: 30,
    area: "1,200 sq ft",
    description: "An intimate setting with rich mahogany paneling and warm candlelight. Ideal for private dinners, corporate meetings, and family gatherings.",
    price: 3000,
    featured: false,
    amenities: [
      "Private Bar",
      "Fireplace",
      "AV Equipment",
      "Customizable Lighting",
      "Dedicated Wait Staff"
    ]
  },
  {
    id: "conference-center",
    name: "Executive Conference Center",
    image: conferenceHall,
    capacity: 200,
    area: "4,500 sq ft",
    description: "State-of-the-art conference facilities with modern technology. Perfect for corporate events, presentations, and business seminars.",
    price: 8000,
    featured: false,
    amenities: [
      "4K Projection System",
      "Video Conferencing",
      "Breakout Rooms",
      "High-Speed WiFi",
      "Catering Available"
    ]
  }
];
