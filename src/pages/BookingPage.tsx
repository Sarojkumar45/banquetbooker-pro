import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { venues } from "@/data/venues";
import { format } from "date-fns";
import { CalendarIcon, Check, CreditCard, User, Mail, Phone, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedVenue = searchParams.get("venue") || "";

  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    venue: preselectedVenue,
    guests: "",
    eventType: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const selectedVenue = venues.find((v) => v.id === formData.venue);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.venue || !date || !formData.guests || !formData.eventType)) {
      toast({
        title: "Please fill all fields",
        description: "Select a venue, date, number of guests, and event type.",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && (!formData.name || !formData.email || !formData.phone)) {
      toast({
        title: "Please fill all fields",
        description: "Enter your contact information.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handlePayment = () => {
    toast({
      title: "Booking Confirmed!",
      description: "Your event has been booked. You will receive a confirmation email shortly.",
    });
    // Here you would integrate with Stripe
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-body text-primary uppercase tracking-[0.3em] text-sm">
              Reserve Your Date
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Book Your Event
            </h1>
          </div>

          {/* Progress Steps */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "Event Details" },
                { num: 2, label: "Contact Info" },
                { num: 3, label: "Payment" },
              ].map((s, index) => (
                <div key={s.num} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-display font-bold transition-all",
                      step >= s.num
                        ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step > s.num ? <Check size={20} /> : s.num}
                  </div>
                  <span
                    className={cn(
                      "ml-2 font-body hidden sm:inline",
                      step >= s.num ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {s.label}
                  </span>
                  {index < 2 && (
                    <div
                      className={cn(
                        "w-16 md:w-24 h-1 mx-4 rounded",
                        step > s.num ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-elevated p-8">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Event Details
                </h2>

                {/* Venue Selection */}
                <div className="space-y-2">
                  <Label className="font-display">Select Venue</Label>
                  <Select
                    value={formData.venue}
                    onValueChange={(value) => handleInputChange("venue", value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose a venue" />
                    </SelectTrigger>
                    <SelectContent>
                      {venues.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id}>
                          {venue.name} - ${venue.price.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label className="font-display">Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guest Count */}
                <div className="space-y-2">
                  <Label className="font-display">Number of Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="number"
                      placeholder="Expected number of guests"
                      className="h-12 pl-10"
                      value={formData.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                    />
                  </div>
                  {selectedVenue && formData.guests && parseInt(formData.guests) > selectedVenue.capacity && (
                    <p className="text-destructive text-sm font-body">
                      This venue has a maximum capacity of {selectedVenue.capacity} guests.
                    </p>
                  )}
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label className="font-display">Event Type</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => handleInputChange("eventType", value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="gala">Gala / Charity Event</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-2">
                  <Label className="font-display">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      placeholder="Your full name"
                      className="h-12 pl-10"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-display">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12 pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-display">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-display">Special Requests (Optional)</Label>
                  <Textarea
                    placeholder="Any special requirements or requests..."
                    className="min-h-[100px]"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Payment & Confirmation
                </h2>

                {/* Booking Summary */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Booking Summary
                  </h3>
                  <div className="space-y-3 font-body">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Venue:</span>
                      <span className="text-foreground font-medium">{selectedVenue?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground font-medium">
                        {date ? format(date, "PPPP") : "-"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guests:</span>
                      <span className="text-foreground font-medium">{formData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Event Type:</span>
                      <span className="text-foreground font-medium capitalize">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="text-foreground font-medium">{formData.name}</span>
                    </div>
                    <div className="border-t border-border pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-display text-lg font-semibold">Total:</span>
                        <span className="text-primary font-display text-2xl font-bold">
                          ${selectedVenue?.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Card (Placeholder) */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <CreditCard className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="font-body text-muted-foreground mb-4">
                    Secure payment powered by Stripe
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Connect Lovable Cloud to enable real payments
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <Button variant="hero" onClick={handleNextStep}>
                  Continue
                </Button>
              ) : (
                <Button variant="hero" onClick={handlePayment}>
                  Confirm & Pay
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingPage;
