import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Venues", path: "/venues" },
  { name: "Book Now", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-gradient-gold">
              Grand Majestic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-lg tracking-wide transition-colors duration-300 hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Admin Link */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/admin">
              <Button variant="elegant" size="sm">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-body text-lg tracking-wide py-2 transition-colors duration-300",
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Button variant="elegant" size="sm" className="w-full mt-2">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
